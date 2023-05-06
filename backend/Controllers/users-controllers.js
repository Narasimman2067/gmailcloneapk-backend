
// import bcrypt from "bcryptjs";
// import User from "../Models/Users.js";

// export const loginUser = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res
//         .status(409)
//         .json({ message: "Incorrect Username or Password", status: false });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res
//         .status(404)
//         .json({ message: "Incorrect Username or Password", status: false });
//     }
//     delete user.password;
//     return res
//       .status(200)
//       .json({ message: `${username} login succesfully`, status: true, user });
//   } catch (error) {
//     next(error);
 
//     res.status(500).json({ message: "internal servor error", error });
//   }
// };

// export const Register = async (req, res, next) => {
//   try {
//     const { username, email, password } = req.body;
//     const usernameCheck = await User.findOne({ username });
//     if (usernameCheck) {
//       return res
//         .status(405)
//         .json({ message: "Username already exist", status: false });
//     }
//     const emailCheck = await User.findOne({ email });
//     if (emailCheck) {
//       return res
//         .status(304)
//         .json({ message: "Email already exist", status: false });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({
//       email,
//       username,
//       password: hashedPassword,
//     });
//     delete user.password;
//     return res
//       .status(200)
//       .json({
//         message: `${username} registeration succesfully`,
//         status: true,
//         user,
//       });
//   } catch (error) {
//     next(error);
 
//     res.status(500).json({ message: "internal server error", error });
//   }
// };

// // export const getAllUsers = async (req, res, next) => {
// //   try {
// //     const users = await User.find({ _id: { $ne: req.params.id } }).select([
// //       "email",
// //       "username",
// //       "avatarImage",
// //       "_id",
// //     ]);
// //     return res.json({ message: "users find and shown", users });
// //   } catch (error) {
// //     next(error);
 
// //     res.status(500).json({ message: "internal servor error", error });
// //   }
// // };

// // export const setAvatar = async (req, res, next) => {
// //   try {
// //     const userId = req.params.id;
// //     const avatarImage = req.body.image;
// //     const userData = await User.findByIdAndUpdate(
// //       userId,
// //       {
// //         isAvatarImageSet: true,
// //         avatarImage,
// //       },
// //       { new: true }
// //     );
// //     return res.status(200).json({
// //       isSet: userData.isAvatarImageSet,
// //       image: userData.avatarImage,
// //     });
// //   } catch (error) {
// //     next(error);
 
// //     res.status(500).json({ message: "internal servor error", error });
// //   }
// // };

// export const logOut = (req, res, next) => {
//   try {
//     if (!req.params.id) {
//       return res.json({ message: "User id is required " });
//     }
//     onlineUsers.delete(req.params.id);

//     return res.status(200).send({ message: "logout successfully" });
//   } catch (error) {
//     next(error);
 
//     res.status(500).json({ message: "internal servor error", error });
//   }
// };



import  User  from './../Models/Users.js';
import  bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const addUser = async (req, res) => {
    const {name,email, password } = req.body;

    let user;
    try{
        user=await User.findOne({email})
    }catch(error){
return console.log(error)
    }
    if (user) {
        return res.status(400).json({ message: "user already exists" });
        }
       
        let validatePassword;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password,salt);
try {
    validatePassword = new User({name,email, password: hashedPassword });
    validatePassword = await validatePassword.save();
    
} catch (error) {
   return console.log(error)
}
    if (!validatePassword) {
        return res.status(500).json({ message: "Unable to store user" });
      }
     
    
      return res.status(201).json({ message:"succesfully created",validatePassword});
}


// login user

export const loginUser=async (req,res)=>{
    // it checks the body data of login
    const{email,password}=req.body;
    if (
      !email &&
      email.trim() === "" &&
      !password &&
      password.trim() === ""
    ) {
      return res.status(422).json({ message: "invalid inputs" });
    }
    let user;
    try {
      user=await User.findOne({email})
    } catch (error) {
      return console.log(error)
    }
    // if (user) {
    //     return res.status(400).json({ message: "user already login" });
    //     }
    if (!user) {
      return res.status(500).json({ message: "unable to find the user from this id" });
      }
      
    
    const isPasswordCorrect =bcrypt.compareSync(password,user.password)
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "incorrect email or password" });
      }
      // creating of token to provide secret key
      const token =jwt.sign({id:user._id},process.env.Secretkey,{
        expiresIn:"7d",
      });   

      res.status(200).json({ message: "Authentication complete",token,id:user._id });
   
  }
