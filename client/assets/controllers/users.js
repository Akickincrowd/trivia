myApp.controller('usersController', ['$scope','usersFactory', '$routeParams', '$cookies', function($scope, usersFactory, $routeParams, $cookies) {

$scope.create =function(){
	$cookies.user = $scope.newUser.user
	console.log($cookies.user);
	window.location = '#'
	// form_data= $scope.newUser;
 //     usersFactory.create(form_data);
}

$scope.index =function(){
     usersFactory.index(function(all_users){
     	console.log(all_users)
     	$scope.all_users= all_users;
     });
}


console.log($cookies.user);

$scope.index();

}]);