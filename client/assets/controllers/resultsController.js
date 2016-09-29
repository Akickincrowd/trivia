myApp.controller('resultsController', ['$scope','questionsFactory', '$routeParams', '$cookies', function($scope, questionsFactory, $routeParams, $cookies) {

// GETS TEST QUESTIONS/ANSWERS
$scope.getResults = function(){
	// questionsFactory.getTest(subject, function(callback){
	// 	console.log('test: ', callback);
	// 	$scope.test = callback;
	// })
	// questionsFactory.getResults(function(callback){
	// 	console.log('answers: ', callback);
	// 	$scope.results = callback;
	// })
	$scope.test_score = $cookies.test_score;
	$scope.test = $cookies.test;
	$scope.results = $cookies.results;
}
$scope.getResults();

$scope.goHome = function(){
	window.location = '#/';
}

}]);