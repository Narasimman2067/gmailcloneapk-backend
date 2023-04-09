import mongoose from "mongoose";


const {ObjectId}=mongoose.Schema;


const EmailBodySchema =new mongoose.Schema(

{
    name:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        
    },
    message:{
        type:String,
        required:true,
    },
   date:{
    type:String,
   
   },
    user:{
        type:ObjectId,
        ref:"User",
    },

}

)

export default mongoose.model("EmailBody",EmailBodySchema)