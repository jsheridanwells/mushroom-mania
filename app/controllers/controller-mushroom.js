'use strict';

app.controller('mushroomCtrl', function($scope, MushroomFactory) {

	$scope.mushroomData = [];

	const showMushrooms = function() {
		MushroomFactory.getMushroomsData()
		.then((mushrooms) => {
			$scope.mushroomData = Object.values(mushrooms);
			console.log("mushroomData", $scope.mushroomData);
		});
	};

	showMushrooms();

});