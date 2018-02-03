var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function(req, res) {
    var user = new User();

    user.username = req.body.user.username;
    user.email = req.body.user.email;   
    user.setPassword(req.body.user.password);
    user.save(function(err) {
      var token;
      token = user.generateJwt();
      user.token = token;
      res.status(200);
      res.json({
        "user" : user
      });
      if(err){
          console.log(err);
      }
    });
  };

  module.exports.login = function(req, res) {

    passport.authenticate('json', function(err, user, info){
      var token;
  
      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }
  
      // If a user is found
      if(user){
        token = user.generateJwt();
        var token;
        token = user.generateJwt();
        user.token = token;
        res.status(200);
        res.json({
          "user" : user
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res);
  
  };