'use strict';

app.factory('MushroomFactory', function ($q, $http, FBCreds) {
	const url = FBCreds.databaseURL;

	const getMushroomsData = () => {
		return $q((resolve, reject)=> {
			$http.get(`${url}/mushrooms.json`)
			.then(mushrooms => resolve(mushrooms.data))
			.catch(error => console.log("error in getMushData", error.message));
		});
	};

	return {getMushroomsData};

});

app.factory('FilterFactory', function () {
	return {
		search: ''
	};
});