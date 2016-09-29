myApp.controller('questionsController', ['$scope','questionsFactory', '$routeParams', '$cookies', function($scope, questionsFactory, $routeParams, $cookies) {

// $scope.count = 0;

$scope.check_question =function(){
	// console.log($scope.newQuestion.question);
	var answer = $scope.newAnswer.answer
		questionsFactory.update_score(answer, function(question){
			question_number = question;
		});
	// console.log($scope.question);
	window.location = "#/question"+ question_number;
	$scope.get_score();

	// $scope.next = "<a href='#/question2'> quest </a>"
	
	// $cookies.user = $scope.newUser.user
	// console.log($cookies.user);
	// window.location = '#'
	// form_data= $scope.newUser;
 //     usersFactory.create(form_data);
}

$scope.get_score = function(){
	questionsFactory.get_score(function(score, question){
		$scope.score = score;
		$scope.question = question;
		// console.log($scope.score);
	})
}

$scope.get_score();

$scope.submit = function(){
	var user = $cookies.currentUser;
	$scope.newAnswer.user = user._id;
	answer = $scope.newAnswer
	// console.log(answer); 
	questionsFactory.submit(answer)

}


// $scope.index =function(){
//      usersFactory.index(function(all_users){
//      	console.log(all_users)
//      	$scope.all_users= all_users;
//      });
// }


// console.log($cookies.user);

// $scope.index();

}]);