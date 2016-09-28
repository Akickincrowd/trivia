myApp.factory('questionsFactory', ['$http', function($http) {

function QuestionsFactory(){

var score = 0;
var question = 1;
var answers = ['nothing', 'a', 'a', 'a', 'a','a']

this.update_score = function(answer, callback){
	// console.log(answers[question]);
	if ( answers[question] == answer){
	score+=1;
	console.log('correct')
	}
	question+=1;
	callback(question);
	
}

this.get_score = function(callback){
	// console.log(score);
	callback(score, question);
}

this.create = function(form_data){
	console.log(form_data);
	$http.post('/users', form_data).then(function(returned_data){
        console.log(returned_data);
      });  
}

this.index = function(callback){
	$http.get('/users').then(function(returned_data){
		console.log(returned_data.data);
		callback(returned_data.data);
	})	
}

this.submit = function(answer){
	// $cookies.
	console.log(answer);
	console.log(question);
	if ( answers[question] == answer){
	score+=1;
	// console.log('correct')
	}
	console.log(score);
	$http.puts('/scores', score).then(function(returned_data){
		console.log(returned_data);
	})
}


}
return new QuestionsFactory();
}]);