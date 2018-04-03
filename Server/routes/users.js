var express = require('express');
var router = express.Router(); ////routes to the directory

/* GET users listing. */
router.get('/', function(req, res, next) { //get the listing of users from the resourse
  res.send('respond with a resource'); //after listing sends back to the resourse
});

module.exports = router;
