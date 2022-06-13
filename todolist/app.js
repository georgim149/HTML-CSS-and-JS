const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

const itemsArray = ["a","b","c"];
const workArray = ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"];
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req,res){
  res.render("lists", {listTitle: date.getDate(), items: itemsArray});
})

app.post("/", function(req,res){
  const item = req.body.newItem;
  if(req.body.list === "Work")
  {
    workArray.push(item);
    res.redirect("/work");
  }
  else
  {
    itemsArray.push(item);
    res.redirect("/");
  }

})

app.get("/work", function(req,res){
  res.render("lists", {listTitle: "Work", items: workArray});
})


app.listen(3000,function(){
  console.log("server is online at port 3000");
})
