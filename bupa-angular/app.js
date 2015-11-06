angular.module('bupasearch', ['ngRoute', 'buparesults'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.otherwise({
		templateUrl: bupaconst.resourceuri +'mainTemplate.html',
		controller: 'mainCtrl'
	})

    $locationProvider.html5Mode(true);

}])
.controller("mainCtrl", ['$scope', '$location', 'Gsa',
	function($scope, $location, Gsa) {
    $scope.currentCollection = $location.search().site;
    $scope.cards = {
    	bankofengland: {
    		title: 'Products',
    		collection: 'bankofengland'
    	},
    	lloyds: {
    		title: 'Health',
    		collection: 'lloyds'
    	}
    }
}])
.filter('html', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
