const mongoose =require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/mernstackblogapp2023").then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log(e);
})