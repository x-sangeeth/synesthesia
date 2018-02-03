var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;
var userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    hash: String,
    salt: String,
    token: String,
    bio: String,
    image: String
  });

  userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,"sha256").toString('hex');
  };

  userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,"sha256").toString('hex');
    return this.hash === hash;
  };

  userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };

  mongoose.model('User', userSchema);
