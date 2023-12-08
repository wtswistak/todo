import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { addUser, loginUser, UserError } from "./services/userService";
import { generateToken, verifyToken } from "./utils/authToken";
import { addTodo } from "./services/todoService";
require("dotenv").config();

const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log("work");
  res.send("work");
});

app.post("/todo/add", async (req: Request, res: Response) => {
  const { userId, title, priority, completed, token } = req.body;
  console.log(req.body);
  try {
    const tokenVerify = await verifyToken(token);
    if (!tokenVerify) {
      return res.status(400).json({ message: "Token is required" });
    }
    await addTodo(userId, title, priority, completed);
    res.status(201).json({ message: "Task added to the list" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/user/sign-up", async (req: Request, res: Response) => {
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
app.post("/user/login", async (req: Request, res: Response) => {
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
