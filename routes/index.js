var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	if(req.params.id){
		var index = req.params.id;
	}else {
		var index = 'Welcome';
	}
	//console.log(title);
  res.render('index', { title: index });
});

router.get('/add/:url/:name/:body?', function(req, res, next) {
	//res.render('index',{title:'Express'});
	if(req.params.name != ''){
			var p_name = req.params.name;
	}else{  var p_name = "name2";
	}
	if(req.params.url){
			var p_url = req.params.url;
	}else{  var p_url = "test";
	}
	if(req.params.body){
			var p_body = req.params.body;
	}else{  var p_body = "default body";
	}
	
	var themas = new Themas({
		url:p_url,
		name:p_name,
		body:p_body
	});
	themas.save(function(err,user,affected){
		console.log('asdf');
	});
});

router.post('/reg',function(req,res,next){
	console.log(req.body.username);
	console.log(req.body.password);
	res.redirect('/');
});
module.exports = router;
