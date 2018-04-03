var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //using mongoose gto connect the database
var bear = require('./../models/model.js'); //bear a git based deployment tool. It listens for changes to the git repository, gets the latest changes and launches them.
mongoose.Promise=global.Promise; // this is the Promise interface.

mongoose.connect('mongodb://localhost/hls'); //copnnect to local host
var db = mongoose.connection; //connection to databse

db.once('open',function(){ //open the databse
  console.log("inside connection 2"); //the logger 
});
        
module.exports=router; //routes to the directory

