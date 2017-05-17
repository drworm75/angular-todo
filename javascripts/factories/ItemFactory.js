app.factory("ItemFactory", function($http, $q, FIREBASE_CONFIG) {
	
	let getItemList = () => {
	    let itemz = [];
	    return $q((resolve, reject) => {
	      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
	      .then((fbItems) => {
	        let itemCollection = fbItems.data;
	        if (itemCollection !== null) {
		        Object.keys(itemCollection).forEach((key) => {
		          itemCollection[key].id=key;
		          itemz.push(itemCollection[key]);
		        });
		    }
	          resolve(itemz);
	      })
	      .catch((error) => {
	        reject(error);
	      });
	    });
	  };

  let postNewItem = (newItem) => {
    return $q ((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let deletz = (itemId) => {
  	return $q((resolve, reject) => {
  		$http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
  		.then((resultz) => {
  			resolve()
  		})
     .catch((error) => {
        reject(error);
      });
    });
  };
	  return {getItemList:getItemList, postNewItem: postNewItem, deletz: deletz};



});