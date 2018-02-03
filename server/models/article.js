var mongoose = require( 'mongoose' );

mongoose.Promise = global.Promise;
/*
slug: string;
  title = '';
  description = '';
  body = '';
  tagList: Array<string> = [];
  problem = '';
  solution = '';
  usecases = '';
  advantages = '';
  disadvantages = '';
  monetizationPlan = '';
  plan = '';
  images: Array<string> = [];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
*/
var articleSchema = new mongoose.Schema({
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

  mongoose.model('User', articleSchema);