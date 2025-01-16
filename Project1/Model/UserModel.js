const mongoose = require("mongoose");
const Schema =mongoose.Schema;


//input details

const userSchema = new Schema ({
    name:{
        type:String,//dataType
        required:true,//validate
    },
    gmail:{
        type:String,//dataType
        required:true,//validate
    },
    age:{
        type:Number,//dataType
        required:true,//validate
    },
    address:{
        type:String,//dataType
        required:true,//validate
    }

});

//create table  for above order
module.exports = mongoose.model(
    "UserModel" , //file name
    userSchema  //function name
    
)