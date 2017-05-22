app.controller("ItemEditCtrl", function($location, $routeParams, $scope, ItemFactory)  {
	$scope.newTask = {};

  ItemFactory.getSingleItem($routeParams.id).then((results) => {
    $scope.newTask = results.data;
  	console.log("get single item results", results);
  }).catch((error) => {
  	console.log("getSingleItem", error);
  });

  $scope.addNewItem = () => {
    console.log("When Submit in clicked in ItemEditCtrl, $scope.newTask = ", $scope.newTask);
  	ItemFactory.editItem($scope.newTask).then(() => {
  		$location.url('/items/list');
  	}).catch((error) => {
  		console.log("editItem", error);
  	});
  };


});