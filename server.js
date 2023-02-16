// makes sure 'dotenv' file becomes your environment
require('dotenv').config();
const userLib = require("./backend/lib/userLib");
const mongoose = require("mongoose");

const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	// res.send("I Am Abhishek");
	res.sendFile(__dirname + "/index.html");
});

app.get("/resume", function(req, res){
	// res.send("I Am Abhishek");
	res.sendFile(__dirname + "/resume.html");
});

app.get("/card", function(req, res){
	res.sendFile(__dirname + "/card.html");
});

// serving static css files
app.use(express.static(__dirname));

// to avoid some error
mongoose.set('strictQuery', true);
// whenever a connection establishes or an error happens it goes inside
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err){
	if(err){
		console.error(err);
	}
	else{
		console.log("DB Connected");
		// TODO: don't create a user if atleast 1 user in the table
		userLib.createFirstUser(function(err, res){
			if(err){
				// console.log(err);
				userLib.getAllUsers(function(err, res){
					if(res[0] != null){
						console.log("Already " + res[0].userName + " User Exists.");
					}
				});
			}
			else{
				console.log(res);
			}
		});
		
		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});
