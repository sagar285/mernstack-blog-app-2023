const express =require("express")
const app =express()
require("dotenv").config()
const port= process.env.PORT
const router =require("./routes/router")
require("./dbconnection/dbconn")
const cors =require("cors")

app.use(express.json());
app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use(router);


app.listen(port,()=>{
    console.log(`server listen on port no :${port}`);
})