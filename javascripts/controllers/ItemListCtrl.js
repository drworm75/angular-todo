app.controller("ItemListCtrl", function($scope, ItemFactory)  { 
	$scope.items = [];  
		let getItems = () => {	
		ItemFactory.getItemList().then((itemz) => {
			$scope.items = itemz;
			console.log(itemz);
		}).catch((error) => {
			console.log("Add error", error);
		});
	};

	getItems();

	$scope.deleteItem = (id) => {
		ItemFactory.deletz(id).then(() => {
		getItems();
		})
		.catch((error) => {
			console.log("deleteItem Error", error);
		});
	};
});