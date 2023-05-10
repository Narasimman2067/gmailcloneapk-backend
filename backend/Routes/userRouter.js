import express from "express";
import { addUser } from "../Controllers/users-controllers.js";

const userRouter = express.Router();
userRouter.post("/signup", addUser);

export default userRouter;
