import jwt, { JwtPayload } from "jsonwebtoken";

export const generateToken = (userId: string) => {
  const privateKey = process.env.PRIVATE_KEY || "secretKey";
  const token = jwt.sign({ userId }, privateKey, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token: string): Promise<JwtPayload> => {
  return new Promise((resolve, reject) => {
    console.log("w authToken:", token);
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
