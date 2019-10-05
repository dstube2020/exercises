var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/myapp");
 

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/myapp";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("myapp");
  dbo.createCollection("simapp", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
var nameSchema = new mongoose.Schema({
    
    userName: String,
    email: String,
    password: String
   });
   var User = mongoose.model("User", nameSchema);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/register.html");
   });
   

  app.post("/register", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("account created  succesfull");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
  // Testing our code
app.listen(port, () => {
 console.log("Server listening on port " + port);
});