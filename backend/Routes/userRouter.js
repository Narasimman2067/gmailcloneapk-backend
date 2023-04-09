
import express from "express";
import { addUser } from "../Controllers/users-controllers.js";






const userRouter=express.Router()
userRouter.post("/signup",addUser)


// import bcrypt from "bcrypt";
// import { User } from "../Models/Users.js";

// export const router = express.Router();

// router.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   let user;
//   try {
//     user = await User.findOne({ email });
//   } catch (error) {
//     return console.log(error);
//   }
//   if (user) {
//     return res.status(400).json({ message: "admin already exists" });
//   }

//   let admin;
//   const hashedPassword = bcrypt.hashSync(password);
//   try {
//     admin = new User({ email, password: hashedPassword });
//     admin = await admin.save();
//   } catch (error) {
//     return console.log(error);
//   }
//   if (!admin) {
//     return res.status(500).json({ message: "Unable to store admin" });
//   }
//   return res.status(201).json({message:admin });

//   // try {
//   //   let user = await User.findone({ email: req.body.email });
//   //   if (!user) return res.status(409).json({ message: "Email already exists" });

//   //   // haspassword generate

//   //   const salt = await bcrypt.genSalt(10);
//   //   const hasedPassword = await bcrypt.hash(req.body.password, salt);

//   //   // newpassword updation

//   //   user = await new User({
//   //     name: req.body.name,
//   //     email: req.body.email,
//   //     password: hasedPassword
//   //   }).save()
//   //   const token =generateAuthToken(user._id);
//   //   res.status(201).json({ message: "signup succesfully",token});
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal server error",error});
//   // }
// });

// export const signUpRouter = router;







export default userRouter;

