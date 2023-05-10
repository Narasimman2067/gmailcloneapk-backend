import express from "express";
import { emailBody, emailPost, emailbodydelete, emailbodyput, emailbodyuser, postEmail } from "../Controllers/emailbody-controllers.js";



const emailbodyRouter =express.Router();

emailbodyRouter.get("/alluser",emailBody)
emailbodyRouter.get("/emailuser",emailbodyuser)
emailbodyRouter.post("/email",postEmail)
emailbodyRouter.post("/post",emailPost)
emailbodyRouter.put("/edit/:id",emailbodyput)
emailbodyRouter.delete("/:id",emailbodydelete)



export default emailbodyRouter;
   
