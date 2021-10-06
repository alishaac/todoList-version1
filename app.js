//jshint esversion: 6
const express = require('express');

const date = require(__dirname+ "/date.js");

const app = express();


let workItems=[];
let items = ["Buy Food", "Cook Food", "Eat Food"];
let trashbox;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));        // we tell express to serve up this folder as a static resource . this folder will contain all those files u want to use .

app.get("/", function (req, res) {

let day = date.getDate();
    res.render('list', {ListTitle: day , newListItems : items});
});


app.post("/" , function(req,res){
 
  let item = req.body.newItem;

  if(req.body.list == "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});







app.get("/work",function(req,res){
res.render("list",{ListTitle : "Work List",newListItems: workItems})
});

app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
