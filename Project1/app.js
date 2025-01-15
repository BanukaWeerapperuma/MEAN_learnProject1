const express =require("express");    //add ex to app
const mongoose =require("mongoose");  // add mon. to app

const app = express();

//Middleware
app.use("/" ,(req,res ,next)=>{
    res.send("It IS working");
})

//call mongoose //db connection

mongoose.connect("mongodb+srv://admin:R1s713fdUusTgDUj@cluster0.b5sbo.mongodb.net/")
.then(()=> console.log("connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));