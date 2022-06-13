const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");

});
app.post("/bmiCalculator", function(req,res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/(height*height);
  //Always have text before a number send!
  res.send("Your bmi is: "+bmi);
});
app.get("/bmi", function(req,res){});

app.listen("3000", function(){
  console.log("Server started.");
});
