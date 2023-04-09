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
