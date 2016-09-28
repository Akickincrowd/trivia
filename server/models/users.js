var mongoose = require('mongoose');

var Schema= mongoose.Schema;


var UserSchema= new mongoose.Schema({
	name:{
	type: String,
	required: true,
	unique: true
	},
	results: [
		{ test_name: String, score: Number}
	]
	// posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}]
})

mongoose.model("Users", UserSchema);


