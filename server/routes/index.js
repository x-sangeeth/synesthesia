var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profiles');
var ctrlAuth = require('../controllers/authentication');
var cntrlArticle = require('../controllers/articles');

//authenticated routes
router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/articles', auth, cntrlArticle.articleSave);

// authentication
router.post('/users', ctrlAuth.register);
router.post('/users/login', ctrlAuth.login);

module.exports = router;