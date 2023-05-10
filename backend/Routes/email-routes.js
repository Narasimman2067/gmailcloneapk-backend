import express from "express";
import { deleteEmails, getEmails, moveEmailsToBin, saveSendEmails, toggleStarredEmail } from "../Controllers/email-controller.js";

const routes = express.Router();
routes.post("/save", saveSendEmails);
routes.post("/save-draft", saveSendEmails);
routes.get("/emails/:type", getEmails);
routes.post("/starred", toggleStarredEmail);
routes.delete("/delete", deleteEmails);
routes.post("/bin", moveEmailsToBin);
export default routes;
