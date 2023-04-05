const express =require("express")
const app =express()
require("dotenv").config()
const port= process.env.PORT
const router =require("./routes/router")
require("./dbconnection/dbconn")

app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`server listen on port no :${port}`);
})