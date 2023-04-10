import express from "express";
import { emailBody, emailbodydelete, emailbodyput, emailbodyuser, postEmail } from "../Controllers/emailbody-controllers.js";



const emailbodyRouter =express.Router();

emailbodyRouter.get("/alluser",emailBody)
emailbodyRouter.get("/emailuser",emailbodyuser)
emailbodyRouter.post("/email",postEmail)
// emailbodyRouter.post("emailpost",emailbodyPost)
emailbodyRouter.put("/edit/:id",emailbodyput)
emailbodyRouter.delete("/:id",emailbodydelete)



export default emailbodyRouter;
   
