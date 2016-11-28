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
		$scope.showMore = true;
		$scope.showMoreHorizontal = true;
		$scope.showLessHorizontal = false;
		$scope.loading = false;
		$scope.generatedMatrix = [];
		$scope.currentPage = 1;
		$scope.horizontalPageSize = 10;
		const pageSize = 10;
			// horizontalPageSize = 56;

		let offset = 0,
			horizontalOffset = 0,
			previousPage = 1,
			numberOfColumns = $scope.horizontalPageSize;
		$scope.loadPage = () => {
			if ($scope.loading || !$scope.showMore) {
				return;
			}
			$scope.loading = true;
			let numrows = countNumRows(),
				numcols = numberOfColumns;
			console.log(numcols);
			$scope.generateMatrix([numrows, numcols]);
			$scope.loading = false;
		};
		// $scope.loadPage();
		$scope.savePathNodeCoords = () => {
			let coord = {value: 1, page}
		};
		$scope.resetData = () => {
			$scope.showMore = true;
			$scope.showMoreHorizontal = $scope.matrixSize > $scope.horizontalPageSize;
			$scope.showLessHorizontal = false;
			$scope.loading = false;
			$scope.generatedMatrix = [];
			$scope.currentPage = 1;
			previousPage = 1;
			horizontalOffset = $scope.horizontalPageSize;
			numberOfColumns = $scope.matrixSize > $scope.horizontalPageSize ? $scope.horizontalPageSize : $scope.matrixSize;
			offset = 0;
		};

		$scope.loadHorizontalPage = () => {
			console.log(previousPage);
			let numcols = countNumCols(),
				numrows = countNumRows(true);

			$scope.generateMatrix([numrows, numcols, 'column']);
			previousPage = $scope.currentPage;
			console.log(previousPage);
		};

		// $scope.loadLeft = () => {
		// 	horizontalOffset = horizontalOffset - $scope.horizontalPageSize;
		// 	let numcols = countNumCols(),
		// 		numrows = countNumRows();
		// 	$scope.generateMatrix([numrows, numcols, 'column']);
		// };
		// $scope.loadRight = () => {
		//
		// 	let numcols = countNumCols(),
		// 		numrows = countNumRows();
		//
		// 	$scope.generateMatrix([numrows, numcols, 'column']);
		//
		// };
		let countNumRows = (reload) => {
			let difference = $scope.matrixSize - offset - pageSize,
				loadNow = 0;
			$scope.showMore = false;
			if (difference > 0) {
				$scope.showMore = true;
				loadNow = pageSize;
				if (!reload) {
					offset += pageSize;
				}
			} else {
				loadNow = $scope.matrixSize - offset;
			}
			return loadNow;
		};
		let countNumCols = () => {

			let tmpSize = $scope.currentPage > previousPage ? ($scope.horizontalPageSize * (-1)) : $scope.horizontalPageSize;
			let difference = $scope.matrixSize - horizontalOffset + tmpSize;
				// loadNow = 0;
			if (difference > 0) {
				numberOfColumns = $scope.horizontalPageSize;
				horizontalOffset += tmpSize;
			} else {
				numberOfColumns = $scope.matrixSize - horizontalOffset;
				horizontalOffset = $scope.matrixSize;
			}
			console.log('tmp: '+tmpSize);
			console.log('offset: '+horizontalOffset);
			console.log('diff: '+difference);
			return numberOfColumns;
		};

		$scope.generateRow = (numcols) => {
			let row = '';
			while(numcols !== 0) {
				row += numcols > 1 ? '0 ' : '0';
				numcols = numcols - 1;
			}
			return row;
		};

		$scope.generateMatrix = ([numrows, numcols = $scope.horizontalPageSize, type = 'row']) => {
			// let begin = (($scope.currentPage - 1) * horizontalPageSize),
			// 	end = begin + horizontalPageSize;

			// $scope.filteredTodos = $scope.todos.slice(begin, end);
			if (type === 'row') {
				for (let r = 0; r < numrows; r++) {
					// console.log('cols: ' + numcols);
					// console.log('offset: ' + offset);
					// let row = '';
					// while(begin !== end) {
					// 	row += numcols > 1 ? '0 ' : '0';
					// 	begin = begin + 1;
					// }
					let row = $scope.generateRow(numcols);
					$scope.generatedMatrix.push(row);
				}
			} else {
				for (let r = 0; r < $scope.generatedMatrix.length; r++) {
					// let row = $scope.generateRow(numcols);
					$scope.generatedMatrix[r] = $scope.generateRow(numcols);
				}
			}



			// $scope.offset +=
		};

		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	}]);
