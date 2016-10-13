(function() {
	  
// var app = angular.module("githubViewer", []);

var MainController = function MainController($scope, $http) {
	var onUserComplete = function (response) {
		 $scope.user = response.data;  
	};

	var onError = function (reason) {
		 $scope.error = "Could not fetch the user";  
	}

	$http.get("http://api.github.com/users/robconery")
		.then(onUserComplete, onError);
 

    $scope.message = 'hello anguler';
    

};

// app.controller("MainController", ["$scope", "$http"], MainController);
angular
    .module('macPro')
    .controller('MainController', MainController);

}());

