import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const generateToken = (username: string) => {
  const privateKey = process.env.PRIVATE_KEY || "secretKey";
  const token = jwt.sign({ username }, privateKey, { expiresIn: "1h" });
  return token;
};

const verifyToken = (token: string): Promise<JwtPayload> => {
  return new Promise((resolve, reject) => {
    const privateKey = process.env.PRIVATE_KEY || "secretKey";

    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded as JwtPayload);
      }
    });
  });
};

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header("Authorization")?.split(" ")[1];

  try {
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }
    const tokenVerify = await verifyToken(token);

    if (!tokenVerify) {
      return res.status(400).json({ message: "Invalid token" });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
