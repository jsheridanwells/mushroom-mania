'use strict';

const app = angular.module('Mushrooms', ['ngRoute']);

app.config(($routeProvider) => {

	//add partial for mushroom list when factory is built
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main-view.html',
		controller: 'mushroomCtrl'
	})
	.otherwise('/');

});

app.run(($location, FBCreds) => {
	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain,
	    databaseURL: FBCreds.databaseURL,
	};

	console.log("authConfig", authConfig);

	firebase.initializeApp(authConfig);

});

