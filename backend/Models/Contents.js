import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema



const ContentsSchema = mongoose.Schema({
  userName: String,
  userPassword: String,
  userType: String,
  userTelNo: String,
  userEmail: String,
  dateSaved: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
});
export default mongoose.model("Contents", ContentsSchema);
