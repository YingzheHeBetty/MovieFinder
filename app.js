var express = require("express");
var app = express();
var port = 3000;
var request = require("request");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
}) 
		
		

app.get("/results", function(req,res){
	var tmp = req.query.movie;
	var url = "http://www.omdbapi.com/?t=" + tmp +"&plot=full&apikey=thewdb";
	request(url , function(error,response,body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body) // turn string into an object
			res.render("result", {data: data});
			
	}
})
})




app.listen(port, function(){
	console.log("Movie App has started!!!");
})