const User = require("../Model/UserModel");

//display data----------------------------
const getAllUsers = async(req , res , next)=>{
    let Users;

    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }

//not found
if(!users){
    return res.status(404).json({message:"Use not found"});
}
//display all users
    return res.status(200).json({users});
};


//data Insert---------------------------
const addUsers = async (req , res , next) => {
    const {name , gmail ,age , address} = req.body;

    let users;

    try{
        users = new User ({name , gmail , age, address});
        await users.save();  // save database
    }catch(err){
            console.log(err);       
    }
    //not insert users
    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({users})
}


//export  all users
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;