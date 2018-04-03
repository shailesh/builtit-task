var express = require('express'); //framework for node
var path = require('path'); //copy of the NodeJS 'path' module published to the NPM registry
var favicon = require('serve-favicon'); //use to identify a site
var logger = require('morgan'); //for auto-archiving log files.
var cookieParser = require('cookie-parser'); //Parse Cookie header and populate req.cookies with an object keyed by the cookie names
var bodyParser = require('body-parser'); //The bodyParser object to create middlewares.

var routes = require('./routes/index'); //lets easily dispatch based on url-style strings.
var users = require('./routes/users');

var app = express(); //framework

// view engine setup
app.set('views', path.join(__dirname, 'views')); //directory in which the currently executing script resides.
app.set('view engine', 'jade'); //render template files

// uncomment after placing your favicon in public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); //use favicon (logo)
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, '../Client/dist/')));

app.use('/data', routes);

// function to catch 404 erro
// and then forward it to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found'); //checking error
  err.status = 404;  //error status if found
  next(err); //for next error
});

// error handlers
// development error handler
if (app.get('env') === 'development') { //checking the environment if it is development
  app.use(function(err, req, res, next) {
    res.status(err.status || 500); //then checks the status of error if found
    res.render('error', { //render to the error template
      message: err.message, // compose a message to reflect on the web
      error: err
    });
  });
}

// production error handler
app.use(function(err, req, res, next) { ///checking the environment if it is production
  res.status(err.status || 500); ////then checks the status of error if found
  res.render('error', { //render to the error template
    message: err.message, // compose a message to reflect on the web
    error: {}
  });
});


module.exports = app; //runing the application