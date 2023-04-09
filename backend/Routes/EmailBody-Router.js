import express from "express";
import { emailBody, emailbodyPost, emailbodydelete, emailbodyput, emailbodyuser } from "../Controllers/emailbody-controllers.js";



const emailbodyRouter =express.Router();

emailbodyRouter.get("/alluser",emailBody)
emailbodyRouter.get("/emailuser",emailbodyuser)
emailbodyRouter.post("/email",emailbodyPost)
emailbodyRouter.put("/edit/:id",emailbodyput)
emailbodyRouter.delete("/:id",emailbodydelete)



export default emailbodyRouter;
   
