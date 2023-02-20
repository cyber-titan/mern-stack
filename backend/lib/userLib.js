const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users = await userModel.find({});
        callback(null,users);
    }
    catch(err){
        callback(err,null)
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

module.exports.createUser = async function(user, callback) {
    try {
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}

module.exports.updateUser = async function(username, data, callback) {
    try {
        var query ={
            userName : username
        };
        var result = await userModel.updateOne(query,data);
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}

module.exports.deleteUser = async function(username,callback)
{
    try{
        var query = {
            userName : username,
        };
        var result = await userModel.deleteOne(query);
        // var result = await userModel.updateOne(query,{isDeleted : true});
        callback(null, result);
    }
    catch(err)
    {
        callback(err,null);
    }
}

module.exports.getUsersbyFilter = async function(filter,callback) {
    try {
        var user = await userModel.find(filter);
        callback(null,user);
    } catch (err) {
        callback(err, null);
    }
}

                        // TODO LIST userLib
// get all todos
module.exports.getAllTodos= async function(callback) {
    try {
        var tasks = await userModel.find({});
        callback(null, tasks);
    } catch (err) {
        callback(err, null);
    }
}

// get todos by query
module.exports.getTodosByQuery = async function(filter, callback) {
    try {
        var user = await userModel.find(filter);
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}

// get single todo by id
// todoModel.find({ _id: id });
module.exports.getSingleTodoById = async function(taskId, callback) {
    try {
        var user = await userModel.find(taskId);
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}