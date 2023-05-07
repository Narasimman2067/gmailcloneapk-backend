import mongoose from "mongoose";



const EmailBodySchema = new mongoose.Schema({
  To: String,
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
