angular.module('bupasearch', ['ngRoute', 'buparesults'])
.config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', 
    function($routeProvider, $locationProvider, $sceDelegateProvider) {
	$routeProvider
	.otherwise({
		templateUrl: bupaconst.resourceuri +'mainTemplate.html',
		controller: 'mainCtrl'
	})

    $locationProvider.html5Mode(true);

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        bupaconst.resourceuri + '**'
    ]);
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
