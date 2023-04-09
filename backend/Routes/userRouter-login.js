import express from "express";
import { loginUser } from "../Controllers/users-controllers.js";
// import bcrypt  from 'bcryptjs';
// import User, { generateAuthToken } from "../Models/Users.js";





const loginRouter=express.Router()


loginRouter.post("/login",loginUser)



export default loginRouter;