myApp.factory('questionsFactory', ['$http', function($http) {

function QuestionsFactory(){

var score = 0;
// var question = 1;
// var answers = ['nothing', 'a', 'a', 'a', 'a','a']

var index = 0;
var geography = [{question:'How many continents are there on Earth?', options: ['1', '2', '3', '4', '5', '6', '7', '8'], answer:'7'},
	{question:'What two nations is Mt. Everest located in?', options: ['China/Russia', 'China/Nepal', 'China/India', 'China/Tajikistan'], answer:'China/Nepal'},
	{question:'Is the South Pole a continent?', options: ['Yes', 'No', 'Maybe', 'LIES!'], answer:'Yes'},
	{question:'The Saharian Desert is located amongst which country?', options: ['Bengladesh', 'Yemen', 'Saudi Arabia', 'Mexico', 'Chile', 'Algeria', 'Australia'], answer:'How much?'}];

	var sport = [{question:'How many points is a touchdown?', options: ['1pt', '3pt', '6pt'], answer:'6pt'},
	{question:'What is the most popular sport in USA?', options: ['Baseball', 'Cricket', 'Football', 'Yelling', 'Soccer', 'Basketball'], answer:'Football'},
	{question:'Who is referred to in the saying, "I wanna be like Mike."', options: ['Mike Tyson', 'Michael Kors', 'Mack the Knife', 'Mack-arena, ahai!', 'Michael Jordan'], answer:'Michael Jordan'},
	{question:'If NASCAR is a sport, then is "Fast & Furious: Tokyo Drift" a sporting movie?', options: ['Yes', 'No', 'wtf idk lmao'], answer:'wtf idk lmao'}];

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

	console.log(score);
	$http.puts('/scores', score).then(function(returned_data){
		console.log(returned_data);
	})
}


}
return new QuestionsFactory();
}]);