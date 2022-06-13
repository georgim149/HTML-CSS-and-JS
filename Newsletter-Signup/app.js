const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({}))

app.use(express.static(__dirname + '/'));
app.post("/signup", function(req,res){
  console.log(__dirname+"/css");
  console.log(req.body.firstName+" "+req.body.lastName+" "+req.body.email);
});
app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
})

app.listen("3000", function(){
  console.log("Server is running on 3000.");
});

// API key
//72fb516ae935b829eff621dcf7df80fd-us20
