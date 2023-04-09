import jwt from "jsonwebtoken";
import User from "../Models/Users.js";
import EmailBody from "../Models/EmailBody.js";


export const emailBody = async (req, res) => {
  try {
    const content = await EmailBody.find().populate("user", "name");
    if (!content) {
      return res.status(400).json({ message: "Couldn't fetch your data" });
    }
    res.status(200).json({ message: content });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const isSignedIn = async (req, res, next) => {
  let token;
  if (req.headers) {
    try {
      token = req.headers["x-auth-token"];
      const decode = jwt.verify(token, process.env.SecretKey);
      console.log(decode);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid Authorization" });
    }
  }
  if (!token) return res.status(400).json({ message: "Access denied" });
};

export const emailbodyPost = async(req, res)=>{
  try {
      let postdate = new Date().toJSON().slice(0, 10); 
      const content = await new EmailBody(
          {...req.body,
               date:postdate, 
               user: req.user._id}
               ).save()
     if(!content){
      return res.status(400).json({message:"Error posting your content"})
     }
     res.status(200).json({message:content})
  } catch (error) {
      console.log(error)
      res.status(500).json({message:"Internal server error"})
  }
}

export const emailbodyuser = async (req, res) => {
  try {
    const content = await EmailBody.find({ user: req.user._id }).populate(
      "user",
      "name email"
    );
    if (!content) {
      return res.status(400).json({ message: "Error fetching your content" });
    }
    res.status(200).json({ message: content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const emailbodyput = async (req, res) => {
  try {
    const updatedContent = await EmailBody.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedContent) {
      return res.status(400).json({ message: "Error updating your content" });
    }
    res.status(200).json({ message: updatedContent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const emailbodydelete = async (req, res) => {
  try {
    const deleteContent = await EmailBody.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!deleteContent) {
      return res.status(400).json({ message: "Error Deleting your content" });
    }
    res.status(200).json({ message: "Deleted Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
