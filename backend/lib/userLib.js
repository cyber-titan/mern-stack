// const userModel = require("../models/userModel");
// OR
import mongoose from "mongoose";
import userModel from "../models/userModel.js"

export async function getAllUsers(callback){
    try{
        var users = await userModel.find({});
        callback(null,users);
    }
    catch(err){
        callback(err,null)
    }
}

export async function createFirstUser(callback){
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

export async function createUser(user, callback) {
    try {
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}

export async function updateUser(username, data, callback) {
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

export async function deleteUser(username,callback)
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

export async function getUsersbyFilter(filter,callback) {
    try {
        var user = await userModel.find(filter);
        callback(null,user);
    } catch (err) {
        callback(err, null);
    }
}

                        // TODO LIST userLib
// get all todos
export async function getAllTodos(callback) {
    try {
        var tasks = await userModel.find({});
        callback(null, tasks);
    } catch (err) {
        callback(err, null);
    }
}

// get todos by query
export async function getTodosByQuery(filter, callback) {
    try {
        var user = await userModel.find(filter);
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}

// get single todo by id
// todoModel.find({ _id: id });
export async function getSingleTodoById(taskId, callback) {
    try {
        var user = await userModel.find(taskId);
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}