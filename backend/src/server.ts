import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/authRoutes";
import todoRouter from "./routes/todoRoutes";
require("dotenv").config();

const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.options("*", cors());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", todoRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
