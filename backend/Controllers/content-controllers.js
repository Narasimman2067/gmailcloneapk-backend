import Contents from "../Models/Contents.js";



export const postUser= async(req, res) => {
    const user = new Contents ({
    userName : req.body.userName,
    userType : req.body.userType,
    userPassword : req.body.userPassword,
    userTelNo : req.body.userTelNo,
    userEmail : req.body.userEmail
    });
    try {
    const savedUser = await user.save()
    res.json(savedUser);
    } catch(err) {
    console.log( err);
    res.json({message : err})

    }};