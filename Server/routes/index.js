var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bear = require('./../models/model.js');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/hls');
var db = mongoose.connection;

db.once('open',function(){
  console.log("inside connection 2");
});
        
module.exports=router;

