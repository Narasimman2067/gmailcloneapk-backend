import mongoose from "mongoose";


const {ObjectId}=mongoose.Schema;


export const EmailBodySchema =new mongoose.Schema(

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
        type:mongoose.Types.ObjectId,
        ref:"User",
    },

}

)

export default mongoose.model("EmailBody",EmailBodySchema)