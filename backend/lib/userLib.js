const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users = await userModel.find({});
        callback(null, users);
    }
    catch(err){
        callback(err, null);
    }
}

module.exports.createFirstUser = async function(callback){
    try{
        var user = {
            userName: "abhishek",
            yearOfGraduation: 2024,
            
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, user);
    }
    catch(err){
        callback(err, null);
    }
}