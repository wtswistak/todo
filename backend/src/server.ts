import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { addUser, loginUser, UserError } from "./services/userService";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  console.log("work");
  res.send("work");
});

app.post("/sign-up", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    await addUser(username, email, password);
    res.status(201).json({ message: "Register user success" });
  } catch (error) {
    console.error("Register problem:", error);
    if (error instanceof UserError) {
      res.status(400).json({
        message: "User with this email or username already exists",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "Register problem" });
    }
  }
});
app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    await loginUser(username, password);
    res.status(200).json({ message: "Login user success" });
  } catch (error) {
    console.error("Login problem:", error);
    if (error instanceof UserError) {
      res.status(401).json({
        message: "Invalid username or password",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "Login problem", error: error });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
