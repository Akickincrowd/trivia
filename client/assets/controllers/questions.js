myApp.controller('questionsController', ['$scope','questionsFactory', '$routeParams', '$cookies', function($scope, questionsFactory, $routeParams, $cookies) {

// $scope.count = 0;

$scope.check_question =function(){
	// console.log($scope.newQuestion.question);
	var answer = $scope.newAnswer.answer
		questionsFactory.update_score(answer, function(question){
			question_number = question;
		});
	// console.log($scope.question);
	window.location = "#/question/"+ test_name +'/'+question_number;
	$scope.get_score();
}

$scope.get_score = function(){
	questionsFactory.get_score(function(score){
		$scope.score = score;
		// $scope.question = question;
		// console.log($scope.score);
	})
}

$scope.get_score();



$scope.submit = function(score){
	
	// console.log($cookies.currentUser._id);
	user= {
	 _id: $cookies.currentUser._id,
	score: score,
	test_name: $cookies.subject
	} 
	questionsFactory.submit(user);

}

$scope.getQuestion = function(subject, question_num){
	// console.log(subject)
	// console.log(question_id)
	$cookies.subject = subject;
	// var subject = eval(subjectTopic);
	// var answer = $scope.newAnswer;
	// console.log('route params: ',test_object)
	questionsFactory.getFirstQuestion(subject, question_num, function(question){
		$cookies.this_question = question;
		// $cookies.subject = eval(subject);
		
		// console.log($scope.this_question);
		window.location = '#/question'
	})
}

$scope.getNextQuestion = function(x){
	// console.log(x)
	var subject = $cookies.subject;
	// console.log($cookies.this_question)
	questionsFactory.getNextQuestion(x, subject, function(callback){
		$scope.this_question = callback;
		// console.log(callback)
		if(callback.test_end == 'False'){
			$scope.submit(callback.test_score);
			$scope.test_score= callback.test_score;
			$cookies.test_score = callback.test_score;
			// console.log($cookies.test_score, "the test score after the test")
			window.location = '#/';
		}
	})
}

$scope.test_score = $cookies.test_score
console.log($scope.test_score);

if($cookies.this_question){
	$scope.this_question = $cookies.this_question;
}
// console.log($routeParams.test);
// console.log($routeParams.id);
}]);