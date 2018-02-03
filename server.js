var express = require("express");
const path = require('path');
const http = require('http');
var bodyParser = require("body-parser");
var passport = require('passport');
var mongodb = require("mongodb");
var cors = require('cors');

var ObjectID = mongodb.ObjectID;

require('./server/config/db');
require('./server/config/passport');

//Bring in the routes for the API (delete the default routes)
var routesApi = require('./server/routes/index');

var app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use if needed
app.use(cors({origin: 'http://localhost:4200'}));

// Set our api routes
app.use(passport.initialize());

// Use the API routes when path starts with /api
app.use('/api', routesApi);


app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//  Catch unauthorised errors
app.use(function (err, req, res, next) {
if (err.name === 'UnauthorizedError') {
  res.status(401);
  res.json({"message" : err.name + ": " + err.message});
}
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

module.exports = app;

  // Initialize the app.
  var server = app.listen(process.env.PORT || 4200, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
