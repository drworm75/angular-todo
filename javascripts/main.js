var app = angular.module("TodoApp", []);


app.controller("NavCtrl", ($scope) => {

	$scope.cat = "Meow";
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Items"}];
});

app.controller("ItemCtrl", ($scope) => {
	$scope.dog = "Woof!";
	$scope.showListView = true;

	$scope.newItem = () => {
		$scope.showListView = false;
		console.log("new item");
	};

	$scope.allItems = () => {
		console.log("all items");
		$scope.showListView = true;
	};	
});