/**
 * Quizzer app
 *
 * Description
 */

var Quizzer = angular.module('Quizzer', ['ngRoute', 'ui.bootstrap', 'ngTable']);

Quizzer.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainCtrl',
			templateUrl: 'views/main.html'
		})
		.when('/master', {
			controller: 'masterCtrl',
			templateUrl: 'views/main.html'
		})
		.when('/player', {
			controller: 'playerCtrl',
			templateUrl: 'views/main.html'
		});
}]);