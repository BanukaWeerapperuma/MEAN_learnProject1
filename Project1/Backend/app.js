const express =require("express");    //add ex to app
const mongoose =require("mongoose");  // add mon. to app
const router = require("./Route/userRouters");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
//Middleware --- show backend part
app.use("/users" , router);



//call mongoose //db connection

mongoose.connect("mongodb+srv://admin:R1s713fdUusTgDUj@cluster0.b5sbo.mongodb.net/")
.then(()=> console.log("connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));