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
        
        if(
        		$scope.params.site != bupaconst.coll_products_name &&
        		$scope.params.site != bupaconst.coll_health_name &&
        		$scope.params.site != bupaconst.coll_maps_name &&
        		$scope.params.site != bupaconst.coll_claims_name &&
        		$scope.params.site != bupaconst.coll_general_name
        ){
            $scope.currentView = 'cards';
        }else{
            $scope.currentView = 'fullscreen';
        }

        $scope.coll_products_name=bupaconst.coll_products_name;
        $scope.coll_products_label=bupaconst.coll_products_label;
        $scope.coll_health_name=bupaconst.coll_health_name;
        $scope.coll_health_label=bupaconst.coll_health_label;
        $scope.coll_maps_name=bupaconst.coll_maps_name;
        $scope.coll_maps_label=bupaconst.coll_maps_label;
        $scope.coll_claims_name=bupaconst.coll_claims_name;
        $scope.coll_claims_label=bupaconst.coll_claims_label;
        $scope.coll_general_name=bupaconst.coll_general_name;
        $scope.coll_general_label=bupaconst.coll_general_label;
        
        $scope.cards = {}
        $scope.cards[bupaconst.coll_products_name] = {
        	collection: bupaconst.coll_products_name,
        	label: bupaconst.coll_products_label
        };
        $scope.cards[bupaconst.coll_health_name] = {
    		collection: bupaconst.coll_health_name,
        	label: bupaconst.coll_health_label
        };
        $scope.cards[bupaconst.coll_maps_name] = {
    		collection: bupaconst.coll_maps_name,
        	label: bupaconst.coll_maps_label		
        };
        $scope.cards[bupaconst.coll_claims_name] = {
    		collection: bupaconst.coll_claims_name,
    		label: bupaconst.coll_claims_label		
        };
        $scope.cards[bupaconst.coll_general_name] = {
    		collection: bupaconst.coll_general_name,
    		label: bupaconst.coll_general_label	
        };
          
        //build hrefs for cards
        var p = jQuery.extend({}, $location.search());
        for(var i in $scope.cards){
            var collection = $scope.cards[i].collection
            p.site = collection;
            $scope.cards[i].href = $location.path()+ '?' + jQuery.param(p);
        }

        //build all href
        p.site = 'all';
        $scope.allHref = $location.path() +'?' + jQuery.param(p);
        
        ///////////functions/////////////
        $scope.search = function(){
        	$location.search('q',$scope.searchbox);
        }
    }
])
.filter('html', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
