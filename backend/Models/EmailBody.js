import mongoose from "mongoose";



const EmailBodySchema = new mongoose.Schema({
  name: String,
  subject: String,
  message: String,
  dateSaved: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("EmailBody", EmailBodySchema);
