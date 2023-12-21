import { Router, Request, Response } from "express";
import { addUser, loginUser, UserError } from "../services/userService";
import { generateToken } from "../utils/authToken";

const authRouter = Router();

authRouter.post("/sign-up", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    await addUser(username, email, password);
    res.status(201).json({ message: "Register user success" });
  } catch (error) {
    if (error instanceof UserError) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Register problem" });
    }
  }
});
authRouter.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username);
  try {
    const user = await loginUser(username, password);
    const token = generateToken(user.username);

    res.status(200).json({
      userId: user.id,
      message: "Login user success",
      token,
    });
  } catch (error) {
    if (error instanceof UserError) {
      res.status(401).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Login problem" });
    }
  }
});

export default authRouter;
