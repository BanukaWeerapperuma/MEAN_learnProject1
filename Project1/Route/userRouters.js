const express = require("express");
const router = express.Router();

//Insert model
const User = ("../Model/UserModel.js");

//Insert UserController
const UserController = require("../Controlers/UserControllers")


router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);

//export
module.exports=router;