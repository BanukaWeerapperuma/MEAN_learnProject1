const mongoose = require("mongoose");
const Schema =mongoose.Schema;


//input details

const regiSchema = new Schema ({
    name:{
        type:String,//dataType
        required:true,//validate
    },
    gmail:{
        type:String,//dataType
        required:true,//validate
    },
    password:{
        type:String,//dataType
        required:true,//validate
    }

});

//create table  for above order
module.exports = mongoose.model(
    "Register" , //file name
    regiSchema  //function name
    
)