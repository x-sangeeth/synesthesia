var mongoose = require( 'mongoose' );

var User = mongoose.model('User');

mongoose.Promise = global.Promise;

var articleSchema = new mongoose.Schema({
  slug: String,
  title : String,
  description : String,
  body : String,
  tagList: Array<String>[],
  problem : String,
  solution : String,
  usecases : String,
  advantages : String,
  disadvantages : String,
  monetizationPlan : String,
  plan : String,
  images: Array<String>[],
  createdAt:  String,
  updatedAt:  String,
  favorited:  String,
  favoritesCount:  String,
  author: User
  });

  mongoose.model('Article', articleSchema);