import dotenv from "dotenv";
import express from "express";
import { databaseConnection } from "./db.js";
import cors from "cors";
import userRouter from "./Routes/userRouter.js";
import loginRouter from "./Routes/userRouter-login.js";
import emailbodyRouter from "./Routes/EmailBody-Router.js";
import bodyParser from "body-parser";
import contentRouter from "./Routes/contents-router.js";

// express server

const app = express();

// env configuretion
dotenv.config();

// server Connection
const PORT = process.env.PORT;

// database connection
databaseConnection();

// middlewares

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/user", loginRouter);
app.use("/user", userRouter);
app.use("/user", emailbodyRouter);
app.use("/post", contentRouter);

// use the functions

app.get("/", (req, res) => {
  res.send({ message: "mongodb and server running successfully" });
});

app.listen(PORT, () => console.log(`${PORT} server connected successfully`));
