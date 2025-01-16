const express = require("express");
const router = express.Router();

//Insert model
const User = ("../Model/UserModel.js");

//Insert UserController
const UserController = require("../Controlers/UserControllers")


router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);

//export
module.exports=router;