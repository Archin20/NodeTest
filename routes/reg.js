var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;

	
 
router.get('/', function(req, res, next) {
	res.render('reg');
});

router.post('/',function(req,res,next){
var Users = require('../models/users').Users;
var post = req.body;
var username = req.body.email;
var password = req.body.password;
var users = new Users({
	username:username,
	password:password
});
users.save(function(err,user){
	console.log(user._id);
	//req.session.user = user._id;
	res.redirect('/');
});
});
module.exports = router;
