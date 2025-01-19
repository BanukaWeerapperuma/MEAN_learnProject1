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

//Call register Model
require("./Model/Register");
const User =mongoose.model("Register");

//Register User
app.post("/register", async (req,res)=>{
    const {name,gmail,password} = req.body;
    
    try{
        await User.create({
            name,
            gmail,
            password
        })
        res.send({status: 200, message: "User Registered Successfully"});
    }catch(err){
        res.send({status: 400, message: "Something went wrong"});
    }
});

//Login User
app.post("/login", async (req, res) => {
    const { gmail, password } = req.body;

    try {
        const user = await User.findOne({ gmail }); // Check if user exists
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        // Compare passwords
        if (user.password === password) {
            return res.status(200).json({ status: 200, message: "User Logged in Successfully" });
        } else {
            return res.status(401).json({ status: 401, message: "Incorrect Password" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: 500, message: "Server error" });
    }
});


