import dotenv from "dotenv";
import express from "express";
import { databaseConnection } from "./db.js";
import cors from "cors";
import userRouter from "./Routes/userRouter.js";
import  loginRouter  from "./Routes/userRouter-login.js";
import emailbodyRouter from "./Routes/EmailBody-Router.js";


// express server

const app = express();

// enc configuretion
dotenv.config();

// server Connection
const PORT = process.env.PORT;

// database connection
databaseConnection();

// middlewares
app.use(express.json());
app.use(cors());


// app.use("/api/signup", signUpRouter);
app.use("/user",loginRouter);
app.use("/user",userRouter)
app.use("/user",emailbodyRouter)

// use the functions
app.get("/", (req, res) => {
  res.send("server connected mongoose start running");
});


app.listen(PORT, () => console.log(`${PORT} server connected successfully`));
