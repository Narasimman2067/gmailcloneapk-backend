import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const EmailBodySchema = new mongoose.Schema({
  name: String,
  subject: String,
  message: String,
  dateSaved: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
});

export default mongoose.model("EmailBody", EmailBodySchema);
