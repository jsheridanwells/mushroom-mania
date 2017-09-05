'use strict';

app.controller('mushroomCtrl', function($scope, MushroomFactory, FilterFactory) {

	$scope.mushroomData = [];
	$scope.searchText = FilterFactory;

	const showMushrooms = function() {
		MushroomFactory.getMushroomsData()
		.then((mushrooms) => {
			$scope.mushroomData = Object.values(mushrooms);
			console.log("mushroomData", $scope.mushroomData);
		});
	};

	showMushrooms();

});

app.controller('searchCtrl', function($scope, FilterFactory) {
});