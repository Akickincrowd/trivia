console.log('in the app js page')
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html'
	})
	.when('/users', {
		templateUrl: 'partials/users.html'
	})
	.when('/question1', {
		templateUrl: 'partials/question1.html'
	})
	.when('/question2', {
		templateUrl: 'partials/question2.html'
	})
	.when('/question3', {
		templateUrl: 'partials/question3.html'
	})
	.when('/question4', {
		templateUrl: 'partials/question4.html'
	})
	.when('/question5', {
		templateUrl: 'partials/question5.html'
	})
	.when('/login', {
		templateUrl: 'partials/login.html'
	})
	.when('/', {
		templateUrl: 'partials/index.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});