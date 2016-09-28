var mongoose = require('mongoose');

var Schema= mongoose.Schema;


var UserSchema= new mongoose.Schema({
	name:{
	type: String,
	required: true,
	unique: true
	},
	score: [
		{
			
		}
	]
	// posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}]
})

mongoose.model("Users", UserSchema);


