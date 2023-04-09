import express from "express"
import {postUser} from "../Controllers/content-controllers.js"




const contentRouter=express.Router()
contentRouter.post("/content",postUser)



export default contentRouter;