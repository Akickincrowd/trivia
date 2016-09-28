var mongoose = require('mongoose');
var User = mongoose.model('Users');

function UsersController(){
 
this.login = function(req, res){
	res.render("login.ejs")
}
this.getCurrentUser = function(req, res){
	var user = req.session.user;
	res.json(user);
}

this.index = function(req,res){
	console.log(req.body);	
  User.find({}, function(err, user){
  	if(err){
  		res.json(err)
  	} else{
  		res.json(user);
  	}
  })
} 

this.update = function(req, res){
	console.log('the params are', req.body)
	User.findOneAndUpdate({_id: req.params.id}, 
	{$push: {results: {score: req.body.score, test_name: req.body.test_name}}},
	function(err, user){
		if(err){
			res.json(err)
		}else{
			console.log(user);
			res.json(user)
		}
	})
} 

this.create = function(req,res){
	User.findOne({name:req.body.name}, function(err, user){
		if(err){
			console.log(err);
		} else {
			console.log('after find one: ', user)
			if(user == null){
				var user= new User(req.body);
				user.save(function(err, success){
					if(err){
						console.log(err);
					}else{
						req.session.user = success;
						console.log(req.session.user);
						res.redirect('/');
					}
				})
			} else {
				req.session.user = user;
				console.log(req.session.user);
				res.redirect('/');
			}
		}
	})
}   



}
module.exports = new UsersController(); // what does this export?    