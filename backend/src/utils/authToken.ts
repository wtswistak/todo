import jwt, { JwtPayload } from "jsonwebtoken";

export const generateToken = (username: string) => {
  const privateKey = process.env.PRIVATE_KEY || "secretKey";
  const token = jwt.sign({ username }, privateKey, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token: string): Promise<JwtPayload> => {
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
