myApp.factory('questionsFactory', ['$http', function($http) {

function QuestionsFactory(){
var user_answers = [];
var score = 0;

var index = 0;

var geography = [{question:'How many continents are there on Earth?', options: ['1', '2', '3', '4', '5', '6', '7', '8'], answer:'7'},
	{question:'What two nations is Mt. Everest located in?', options: ['China/Russia', 'China/Nepal', 'China/India', 'China/Tajikistan'], answer:'China/Nepal'},
	{question:'Is the South Pole a continent?', options: ['Yes', 'No', 'Maybe', 'LIES!'], answer:'Yes'},
	{question:'The Sahara Desert is located amongst which country?', options: ['Bengladesh', 'Yemen', 'Saudi Arabia', 'Mexico', 'Chile', 'Algeria', 'Australia'], answer:'How much?'}];

var sport = [{question:'How many points is a touchdown?', options: ['1pt', '3pt', '6pt'], answer:'6pt'},
	{question:'What is the most popular sport in USA?', options: ['Baseball', 'Cricket', 'Football', 'Yelling', 'Soccer', 'Basketball'], answer:'Football'},
	{question:'Who is referred to in the saying, "I wanna be like Mike."', options: ['Mike Tyson', 'Michael Kors', 'Mack the Knife', 'Mack-arena, ahai!', 'Michael Jordan'], answer:'Michael Jordan'},
	{question:'If NASCAR is a sport, then is "Fast & Furious: Tokyo Drift" a sporting movie?', options: ['Yes', 'No', 'wtf idk lmao'], answer:'wtf idk lmao'}];

var coding = [{question:'{x:y} is what?', options: ['Hash', 'Dictionary', 'Object', 'Curly Brace', 'All the above'], answer:'All the above'},
	{question:'is HTML a programming language?', options: ['Yes', 'No', 'What is HTML?', 'I wish it was T_T.'], answer:'No'},
	{question:'What is big O notation?', options: ['An anime mecha', 'Time complexity', 'A letter', 'A number', 'A string'], answer:'Time complexity'},
	{question:'If the pen is mightier than the sword, is a keyboard mightier than a console?', options: ['Swords are the best', '...depends on the console', 'ALL PENS ALL THE TIME!!!', 'We are all keyboard warriors!', 'Console box best box', 'I use a mobile device T_T.'], answer:'We are all keyboard warriors!'}];

var movies = [{question:'In the 1995 movie "Hackers", what are the protagonists hacking?', options: ['Their future prospects in the industry', 'The NSA', 'Trees', 'Gibson', 'Stanley Parable', 'Their acting futures', 'Our collective tears'], answer:'Gibson'},
	{question:'What year did "The Matrix" release in US Theatres?', options: ['1996', '1997', '1998', '1999', '2000', '2001', '2002'], answer:'1999'},
	{question:'"Step Brothers" stars what 2 comedic duo?', options: ['Brangelina', 'Will Farrell/John Reilly', 'Kim/Courtney Kardashian', 'Arnold Schwarzenegger/Danny Devito', 'Keanu Reeves/Sandra Bullock'], answer:'Will Farrell/John Reilly'},
	{question:"You talkin' to me? You talkin' to me?", options: ['Truck Driver', 'Car Driver', 'Pile Driver', 'Screw Driver', 'Delivery Driver', 'Taxi Driver', 'Cab Driver'], answer:'Taxi Driver'}];

this.getFirstQuestion = function(subject, question_num, callback){
	user_answers = [];
	score = 0;
	index = 0;
	var test_version = eval(subject);
	// console.log(test_version[question_num]);
	callback(test_version[question_num]);
}

this.getNextQuestion = function(answer, subject, callback){
	var test_version = eval(subject);
	user_answers.push(answer)
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
// RETURNS TEST RESULTS BASED ON THE SUBJECT
this.getTest = function(subject, callback){
	var test_version = eval(subject);
	callback(test_version);
}
// RETURNS THE USERS ANSWERS IN AN ARRAY
this.getResults = function(callback){
	callback(user_answers);
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
        // console.log(returned_data);
      });  
}

this.index = function(callback){
	$http.get('/users').then(function(returned_data){
		// console.log(returned_data.data);
		callback(returned_data.data);
	})	
}

this.submit = function(user){
	console.log(user);
	$http.put('/users/' + user._id, user).then(function(returned_data){
		console.log(returned_data, "returned data from update");
	})
}


}
return new QuestionsFactory();
}]);