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

app.get('/resume_style', (req, res) => {

	res.sendFile("C:/Users/saiab/OneDrive/Desktop/Bootcamp/13-02-2023/git clone/mern-stack/resume_style.css");
  
  });

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
