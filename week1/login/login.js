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
var nameSchema = new mongoose.Schema({
    
    userName: String,
    email: String,
    password: String
   });
   var User = mongoose.model("User", nameSchema);
   app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
   });
app.post('/login', function(req, res){
    console.log(req.body);
   var result = User.findOne({userName: req.body.userName, password: req.body.password}).then(function(){
     console.log(result)   

})});
app.listen(port, () => {
    console.log("Server listening on port " + port);
   });