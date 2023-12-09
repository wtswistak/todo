import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { addUser, loginUser, UserError } from "./services/userService";
import { generateToken, verifyToken } from "./utils/authToken";
import { addTodo, getTodos } from "./services/todoService";
require("dotenv").config();

const cors = require("cors");
const app = express();
const port = 3000;
const apiRouter = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", apiRouter);

apiRouter.get("/", (req: Request, res: Response) => {
  console.log("work");
  res.send("work");
});

apiRouter.get(
  "/user/:userId/todos/:completed",
  async (req: Request, res: Response) => {
    let { userId, completed } = req.params;
    const token = req.header("Authorization")?.split(" ")[1];
    const userIdInt = parseInt(userId);
    const completedBool = completed === "true";
    try {
      if (!token) {
        return res.status(400).json({ message: "Token is required" });
      }
      const tokenVerify = await verifyToken(token);
      if (!tokenVerify) {
        return res.status(400).json({ message: "Invalid token" });
      }

      const todos = await getTodos(userIdInt, completedBool);
      res.status(200).json({ todos });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);
apiRouter.post("/user/:userId/todos", async (req: Request, res: Response) => {
  let userIdNum = parseInt(req.params.userId);
  const { title, priority, completed, token } = req.body;
  console.log(req.body);
  try {
    const tokenVerify = await verifyToken(token);
    if (!tokenVerify) {
      return res.status(400).json({ message: "Token is required" });
    }
    await addTodo(userIdNum, title, priority, completed);
    res.status(201).json({ message: "Task added to the list" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

apiRouter.post("/auth/sign-up", async (req: Request, res: Response) => {
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
apiRouter.post("/auth/login", async (req: Request, res: Response) => {
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
