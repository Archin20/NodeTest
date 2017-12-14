var express = require('express');
var router = express.Router();

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
router.post('/reg',function(req,res,next){
	console.log(req.body.username);
	console.log(req.body.password);
	res.redirect('/');
});
module.exports = router;
