var mongoose = require('mongoose');
var User = mongoose.model('Users');

function UsersController(){
 
this.login = function(req, res){
	res.render("login.ejs")
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

this.create = function(req,res){
	console.log(req.body);
	console.log(req, "this is the request")
	var user= new User(req.body);
	user.save(function(err, success){
		if(err){
			console.log(err);
		}else{
			res.json(success);
		}
	})
  // res.json({test: "in create"})
}   



}
module.exports = new UsersController(); // what does this export?    