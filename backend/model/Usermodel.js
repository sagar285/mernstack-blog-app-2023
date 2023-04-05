const mongoose =require("mongoose")
const {Schema,model}=mongoose
const bcrypt =require("bcryptjs");


const Userschema =new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true})

Userschema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})

const Usermodel = model("User",Userschema);
module.exports=Usermodel;