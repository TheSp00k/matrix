'use strict';

/**
 * @ngdoc function
 * @name nasdaqApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nasdaqApp
 */

// TODO lets generate matrix page by page. When we add 1 to a matrix, then we save coordinates to another variable.
angular.module('nasdaqApp')
	.controller('MainCtrl', ['$scope', function ($scope) {
		$scope.matrixSize = null;
		const pageSize = 12,
			pageLoadDirections = ['up', 'down', 'left', 'right'];
		$scope.offsetUp = 0;
		$scope.offsetLeft = 0;
		var nodes = Array(10000).fill(Array(10000).fill(0));
		console.log(nodes);
		$scope.loadPage = (direction) => {
			$scope.bla = pageLoadDirections.filter(function(obj) {
				return obj === direction;
			});
			console.log($scope.bla[0]);
			if (direction === 'down') {
				$scope.offsetUp += pageSize;
			}
			if (direction === 'right') {
				$scope.offsetLeft += pageSize;
			}



			$scope.currentPage = Array(pageSize).fill(Array(pageSize).fill(0));

		};
		$scope.loadPage('up');
		$scope.savePathNodeCoords = () => {
			let coord = {value: 1, page}
		};

		$scope.generateMatrix = () => {
			$scope.generatedMatrix = [];
			let numrows = $scope.matrixSize, numcols = $scope.matrixSize;
			for (let r = 0; r < numrows; r++) {
				let columns = [];
				for (let c = 0; c < numcols; c++) {
					columns[c] = 0;
				}
				$scope.generatedMatrix[r] = columns;
			}
			console.log($scope.generatedMatrix);
		};
		// $scope.generateMatrix();
		// console.log($scope.matrixLines);
		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	}]);
