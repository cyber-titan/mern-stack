// makes sure 'dotenv' file becomes your environment
// require('dotenv').config();
// const userLib = require("./backend/lib/userLib");
// const todoLib = require("./backend/lib/todoLib");
// const mongoose = require("mongoose");

// OR 
import {config} from "dotenv";
config();
// const todoLib = require("./backend/lib/todoLib");

import * as todoLib from "./backend/Lib/todoLib.js";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
// const express = require('express');
import express,{request} from "express";
// const { request } = require("express");

// const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

// serving static css files
const options = {
    extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
    index: ['index.html'],
}
app.use(express.static("public"));

// it send data from frontend and puts it into the request.body
app.use(express.json());

app.get("/", function(req, res){
	// res.send("I Am Abhishek");
	res.sendFile(process.cwd() + "/index.html");
});

app.get("/resume", function(req, res){
	// res.send("I Am Abhishek");
	res.sendFile(process.cwd() + "/resume.html");
});

app.get("/card", function(req, res){
	res.sendFile(process.cwd() + "/card.html");
});

app.get("/weather", function(req, res){
	res.sendFile(process.cwd() + "/weather.html");
});

app.get("/todo", function(req, res){
	res.sendFile(process.cwd() + "/todo.html");
});

app.get("/api/todos", function(req, res) {
    todoLib.getAllTodos(function(err, todos) {
        if (err) {
            res.json({ status: "error", message: err, data: null });
        } else {
            res.json({ status: "success", data: todos });
        }
    });
});

app.post("/api/todos", function(req, res) {
    const todo = req.body;
    todoLib.createTodo(todo, function(err, dbtodo) {
        if (err) {
            res.json({ status: "error", message: err, data: null });
        } else {
            res.json({ status: "success", data: dbtodo });
        }
    });
});

app.put(("/api/todos/:todoid"), function(req, res) {
    const todo = req.body;
    const todoid = req.params.todoid;
    todoLib.updateTodoById(todoid, todo, function(err, dbtodo) {
        if (err) {
            res.json({ status: "error", message: err, data: null });
        } else {
            res.json({ status: "success", data: dbtodo });
        }
    });
});

app.delete(("/api/todos/:todoid"), function(req, res) {
    const todoid = req.params.todoid;
    todoLib.deleteTodoById(todoid, function(err, dbtodo) {
        if (err) {
            res.json({ status: "error", message: err, data: null });
        }
        else {
            res.json({ status: "success", data: dbtodo });
        }
    });
});

// to avoid some error
mongoose.set('strictQuery', true);
// whenever a connection establishes or an error happens it goes inside
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err){
	if(err){
		console.error(err);
	}
	else{
		console.log("DB Connected");
		// TODO: don't create a user if atleast 1 user in the table // COMPLETED
		// userLib.createFirstUser(function(err, res){
		// 	if(err){
		// 		userLib.getAllUsers(function(err, res){
		// 			if(res[0] != null){
		// 				console.log("Already " + res[0].userName + " User Exists.");
		// 			}
		// 		});
		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// });

		// userLib.createUser({userName: "abhi01", yearOfGraduation: 2021}, function(err,result){
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

        // userLib.deleteUser("abhi", function(err, result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		// userLib.updateUser("abhishek", {userName: "abhi"}, function(err, result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		
		// userLib.getUsersbyFilter({ userName: "abhi"}, function(err, result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});
