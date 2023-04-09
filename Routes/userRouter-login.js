import express from "express";
import { loginUser } from "../Controllers/users-controllers.js";
// import bcrypt  from 'bcryptjs';
// import User, { generateAuthToken } from "../Models/Users.js";





const loginRouter=express.Router()


loginRouter.post("/login",loginUser)

// const loginRouter =express.Router();


// loginRouter.post("/",async (req,res)=>{
//     try {
//         const user=await User.findone({emial:req.body.email})
//         if(user)
//         {
//             return res.status(400).json({message:"invalid user credentials"})
//         }
//         const validatePassword=await bcrypt.compare(
//             req.body.password,
//             user.password
//         )
//         if(!validatePassword){
//             return res.status(400).json({message:"invalid password"})
//         }
        
//         const Token=generateAuthToken(user._id)


//         res.status(200).send({message:"loged in succesfully",Token})
   
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal server error"})
        
//     }
// })

export default loginRouter;