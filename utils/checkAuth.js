module.esports = function(req, res, next){
	if(!req.session.user){
		return res.redirect('/reg');
	}
	next();
};