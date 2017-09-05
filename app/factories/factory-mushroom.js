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

// 0. create controller to call data
// 1. construct url
// 2. test w/ controller calling data
// 3. organize data so it's printable
// 4. create partial
// 5. print to DOM in partial