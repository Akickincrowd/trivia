myApp.controller('sessionController', ['$scope','usersFactory', '$routeParams', '$cookies', function($scope, usersFactory, $routeParams, $cookies) {

$scope.getUser = function(){
	console.log('session controller hit');
	usersFactory.getUser(function(callback){
		$scope.currentUser = callback;
		console.log($scope.currentUser);
		$cookies.currentUser = callback;
	})
}
$scope.getUser();

// $scope.leaderBoard = function(){
// 	window.location = '#/leaderboard';
// }
}]);