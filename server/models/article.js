var mongoose = require( 'mongoose' );

var User = mongoose.model('User');

mongoose.Promise = global.Promise;

var articleSchema = new mongoose.Schema({
  slug: String,
  title : String,
  description : String,
  body : String,
  tagList: [String],
  problem : String,
  solution : String,
  usecases : String,
  advantages : String,
  disadvantages : String,
  monetizationPlan : String,
  plan : String,
  images: [String],
  createdAt:  String,
  updatedAt:  String,
  favorited:  String,
  favoritesCount:  String,
  //TODO: update with User
  author: String
  });

  mongoose.model('Article', articleSchema);