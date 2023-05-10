import mongoose from "mongoose";


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

export default mongoose.model("User",userSchema);


