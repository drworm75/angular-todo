app.controller("ItemViewCtrl", function($routeParams, $scope, ItemFactory)  {
  $scope.selectedItem = {};

  ItemFactory.getSingleItem($routeParams.id).then((results) => {
  	console.log("$routeParams.id", $routeParams.id);
  	$scope.selectedItem = results.data;
  }).catch((error) => {
  	console.log("getSingleItem", error);
  });

});