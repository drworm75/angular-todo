app.controller("ItemNewCtrl", function($location, $scope, ItemFactory)  {

  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    ItemFactory.postNewItem($scope.newTask).then(() => {
      $scope.newTask = {};
      $location.url("/items/list");
      //switch views
    }).catch((error) => {
      console.log("Add error", error);
    });
  };
});