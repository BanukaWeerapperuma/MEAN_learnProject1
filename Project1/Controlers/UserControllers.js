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


//Get By ID
const getById = async (req , res  , next) => {
    const id=req.params.id;
    let user;

    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }
    //not avable users
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    return res.status(200).json({user});
}


//Update User Details
const updateUser = async (req , res , next) => {
    const id=req.params.id;
    const {name , gmail ,age , address} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id, {name: name , gmail:gmail , age :age});
        users = await users.save();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"unable to Update details"});
    }
    return res.status(200).json({users});

}

//export  all users
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;