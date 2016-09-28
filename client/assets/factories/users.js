myApp.factory('usersFactory', ['$http', function($http) {

function UsersFactory(){
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
this.getUser = function(callback){
	$http.get('/user').then(function(returned_data){
		callback(returned_data.data);
	})
}

}
return new UsersFactory();
}]);