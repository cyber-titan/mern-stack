// const todoModel = require("../models/todoModel");
// OR
import mongoose from "mongoose";
import todoModel from "../models/todoModel.js"

/*
1. createTodo
2. getAllTodos
3. getSingleTodoById
4. getTodosByQuery
5. updateTodoById
6. DeleteTodoById
*/

export async function createTodo(todo,callback){
    try{
        var newTodo = new todoModel(todo);
        var result = await newTodo.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
// module.exports.getAllTodos = async function(callback){
    // OR
export async function getAllTodos(callback){
    try{
        var todos = await todoModel.find({isCompleted: false,isDeleted: false});
        callback(null,todos);
    }
    catch(err){
        callback(err,null);
    }
}

export async function getTodosByQuery(query,callback){
    try{
        var todos = await todoModel.find(query);
        callback(null,todos);
    }
    catch(err){
        callback(err,null);
    }
}

export async function getSingleTodoById(id,callback){
    try{
        var todo = await todoModel.findOne(id);
        callback(null,todo);
    }
    catch(err){
        callback(err,null);
    }
}

export async function updateTodoById(id,data,callback){
    try{
        var todo = {
            _id: id,
        };
        var result = await todoModel.updateOne(todo,data);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}

export async function deleteTodoById(id,callback){
    try{
        var todo = {
            _id: id,
        };
        var result = await todoModel.updateOne(todo,{isDeleted: true});
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}