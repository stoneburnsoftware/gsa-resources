angular.module('bupasearch', ['ngRoute', 'bupasearchservice'])
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
	var collection = $location.search().site;
    $scope.collection = collection;
    $scope.resourceuri = bupaconst.resourceuri;
    $scope.results = {};
    $scope.cards = [
    	{
    		title: 'Products',
    		collection: 'bankofengland'
    	},
    	{
    		title: 'Health',
    		collection: 'lloyds'
    	}
    ]

    if(collection == 'all'){
    	//search each collection
	    for(var i in $scope.cards){
	    	Gsa.search('bupa',$scope.cards[i].collection).then(function(data) {
			    return $scope.results[$scope.cards[i].collection]= data;
			});
	    }
    }else{
    	Gsa.search('bupa',collection).then(function(data) {
		    return $scope.results[collection] = data;
		});
    }
}]);
