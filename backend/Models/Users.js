import mongoose from "mongoose";
// import  jwt  from 'jsonwebtoken';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
      require:true,
        unique:true
    },
    
    password:{
        type:String,
        require:true,
        minLength:8
    },
    cpassword:{
        type:String,
        minLength:8,
    },
    
});
//  export const generateAuthToken =(id)=>{
//         return jwt.sign(id),process.env.Secretkey
//     }
export default mongoose.model("User",userSchema);


