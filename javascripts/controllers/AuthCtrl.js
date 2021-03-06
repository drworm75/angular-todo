app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory){
	$scope.alerts = [];

	$scope.auth = {
		email: "a@a.com",
		password: "aaaaaa"
	};
	
	if($location.path() === '/logout'){
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url('/auth');
	}

	let logMeIn = () =>{
		AuthFactory.authenticate($scope.auth).then((userCreds) => {
			return UserFactory.getUser(userCreds.uid);
		}, (error) => {
		    $scope.alerts.push({msg: error.message});
			console.log("authenticate error", error);
		}).then((user) => {
			$rootScope.user = user;
			$location.url('/items/list');
		}).catch((error) => {
			console.log("getUser error", error);
		});
	};

	$scope.registerUser = () => {
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("registerWithEmail error", error);
		}).then((registerComplete) => {
			logMeIn();
		}).catch((error) => {
			console.log("addUser error", error);
		});
	};

	$scope.loginUser = () => {
		logMeIn();
	};
});