console.log('in the app js page')
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/users', {
		templateUrl: 'partials/users.html'
	})
	.when('/question', {
		templateUrl: 'partials/question.html'
	})
	.when('/test_results', {
		templateUrl: 'partials/test_results.html'
	})
	.when('/', {
		templateUrl: 'partials/main.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});