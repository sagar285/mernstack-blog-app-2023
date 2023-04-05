const User  =require("../model/Usermodel");

exports.register =async(req,res)=>{
    const {name,email,password} =req.body;
    if(!name || !email ||!password){
       res.status(400).send("all fields are mandatory");
    }
    try {
      const usercheck = await User.findOne({email:email})
      if(usercheck){
       return res.status(400).send("pls login this email already exist");
      }
      const newuser = new User({name,email,password});
      const saveuser= await newuser.save();
      res.send(saveuser);
    } catch (error) {
        res.status(400).send(error);
    }
}