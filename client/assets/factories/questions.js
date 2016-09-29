myApp.factory('questionsFactory', ['$http', function($http) {

function QuestionsFactory(){

var score = 0;
// var question = 1;
// var answers = ['nothing', 'a', 'a', 'a', 'a','a']

var index = 0;
var geography = [{question:'how fast am I going?', options: ['30mph', '20mph', '10mph'], answer:'30mph'},
	{question:'what is my name?', options: ['Dan', 'Josh', 'Kevin'], answer:'Dan'},
	{question:'what is my favorite color?', options: ['Orange', 'Green', 'Red'], answer:'Orange'},
	{question:'do you even lift?', options: ['Yes', 'No', 'How much?'], answer:'How much?'}];

	var sport = [{question:'How many points is a touchdown?', options: ['1pt', '3pt', '6pt'], answer:'6pt'},
	{question:'what is my name?', options: ['Dan', 'Josh', 'Kevin'], answer:'Dan'},
	{question:'what is my favorite color?', options: ['Orange', 'Green', 'Red'], answer:'Orange'},
	{question:'do you even lift?', options: ['Yes', 'No', 'How much?'], answer:'How much?'}];

this.getFirstQuestion = function(subject, question_num, callback){

	var test_version = eval(subject);
	console.log(test_version[question_num]);
	callback(test_version[question_num]);
}

this.getNextQuestion = function(answer, subject, callback){
	var test_version = eval(subject);
	if(test_version[index].answer == answer){
		score+=1;
		console.log('correct');
	}
	index +=1;
	if(index == test_version.length){
		callback({test_end:'False', test_score:score})
		score = 0;
		index = 0;
	} else {
	// index = Math.floor(Math.random()*questions.length)
	callback(test_version[index]);
}
}


this.update_score = function(answer, callback){
	// if ( answers[question] == answer){
	// 	score+=1;
	// 	console.log('correct')
	// }
	// question+=1;
	// callback(question);
	if(test_questions[index].answer == answer){
		score+=1;
		console.log('correct');
	}

	index +=1;
	// index = Math.floor(Math.random()*questions.length)
	callback(index);
}

this.get_score = function(callback){
	// console.log(score);
	callback(score);
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