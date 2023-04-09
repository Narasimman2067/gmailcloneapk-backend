import mongoose from "mongoose";




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
});
export default mongoose.model("Contents", ContentsSchema);
