angular.module('bupasearch', ['ngRoute', 'buparesults', 'ui.materialize'])
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
        $scope.params = $location.search();

        $scope.searchbox = $scope.params.q;

        var allCollection = 'all';
        if($scope.params.site == allCollection){
            $scope.currentView = 'cards';
        }else{
            $scope.currentView = 'fullscreen';
        }

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

        //build hrefs for cards
        var p = jQuery.extend({}, $location.search());
        for(var i in $scope.cards){
            var collection = $scope.cards[i].collection
            p.site = collection;
            $scope.cards[i].href = '/search?' + jQuery.param(p);
        }

        //build all href
        p.site = allCollection;
        $scope.allHref = '/search?' + jQuery.param(p);
        
        ///////////functions/////////////
        $scope.search = function(){
        	console.log('searching for ', $scope.searchbox);
        }
    }
])
.filter('html', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
