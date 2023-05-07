import mongoose from "mongoose";
import { ObjectId } from "mongoose";


const EmailBodySchema = new mongoose.Schema({
  name: String,
  subject: String,
  message: String,
  dateSaved: {
    type: Date,
    default: Date.now,
  },
  user: {
    type:ObjectId,
    ref: "User",
  },
});

export default mongoose.model("EmailBody", EmailBodySchema);
