import { Router, Request, Response } from "express";
import { authenticateToken } from "../utils/authToken";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todoService";

const todoRouter = Router();
todoRouter.get(
  "/user/:userId/todos/",
  authenticateToken,
  async (req: Request, res: Response) => {
    let { userId } = req.params;
    const userIdInt = parseInt(userId);

    try {
      const todos = await getTodos(userIdInt);
      res.status(200).json({ todos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

todoRouter.patch(
  "/user/:userId/todos/:todoId",
  authenticateToken,
  async (req: Request, res: Response) => {
    const userIdNum = parseInt(req.params.userId);
    const todoIdNum = parseInt(req.params.todoId);

    try {
      await updateTodo(userIdNum, todoIdNum);
      res.status(201).json({ message: "Task added to the list" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

todoRouter.post(
  "/user/:userId/todos",
  authenticateToken,
  async (req: Request, res: Response) => {
    const userIdNum = parseInt(req.params.userId);
    const { title, priority, completed } = req.body;

    try {
      await addTodo(userIdNum, title, priority, completed);
      res.status(201).json({ message: "Task added to the list" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);
todoRouter.delete(
  "/user/:userId/todos/:todoId",
  authenticateToken,
  async (req: Request, res: Response) => {
    const userIdNum = parseInt(req.params.userId);
    const todoIdNum = parseInt(req.params.todoId);

    try {
      await deleteTodo(userIdNum, todoIdNum);
      res.status(201).json({ message: "Task added to the list" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default todoRouter;
