var mongoose = require('mongoose');
var Article = mongoose.model('Article');
/*
module.exports.articleRead = function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private page"
    });
  } else {
    // Otherwise continue
    Article
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};
*/
module.exports.articleSave = function(req, res) {
  console.log.err('sample');
  var article = new Article();

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
