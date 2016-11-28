'use strict';

/**
 * @ngdoc overview
 * @name nasdaqApp
 * @description
 * # nasdaqApp
 *
 * Main module of the application.
 */
angular
	.module('nasdaqApp', [
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'infinite-scroll',
		'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
