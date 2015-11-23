angular.module('bupasearch', ['ngRoute', 'buparesults', 'ui.materialize', 'bupafilters'])
.config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', 
    function($routeProvider, $locationProvider, $sceDelegateProvider) {
	$routeProvider
	.otherwise({
		templateUrl: bupaconst.resourceuri +'mainTemplate.html',
		controller: 'mainCtrl'
	})

    $locationProvider.html5Mode(false);

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        bupaconst.resourceuri + '**'
    ]);
}])
.controller("mainCtrl", ['$scope', '$location', 'Gsa', '$http',
	function($scope, $location, Gsa, $http) {
        //$scope.params = $location.search();
        $scope.params = parseLocation(window.location.search);
        $scope.params.q = ($scope.params.q || '').replace(/\+/g, " ");
        $scope.searchbox = $scope.params.q;
        $scope.buckets = Gsa.buckets;
        
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
        var p = jQuery.extend({}, $scope.params);
        p.page = 1;
        for(var i in $scope.cards){
            var collection = $scope.cards[i].collection
            p.site = collection;
            $scope.cards[i].href = $location.path()+ '?' + jQuery.param(p);
        }

        //build all href
        p.site = 'all';
        $scope.allHref = $location.path() +'?' + jQuery.param(p);

        //load clusters
        var clusterUri = bupaconst.gsauri + '/cluster?q='+encodeURIComponent($scope.params.q)+'&site=default_collection&client=bupa&proxystylesheet=json&filter=0';
        $http.post(clusterUri).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available

            $scope.clusters=data;
        })
        
        ///////////functions/////////////
        $scope.search = function(){
        	//$location.search('q',$scope.searchbox);
            window.location.href = updateQueryStringParameter(
                updateQueryStringParameter(window.location.href, 'page', 1), 'q', encodeURIComponent($scope.searchbox));
        }

        $scope.search = function(q){
            window.location.href = updateQueryStringParameter(
                updateQueryStringParameter(window.location.href, 'page', 1), 'q', encodeURIComponent(q));
        }

        $scope.hasResults = function(){
            for(var i in Gsa.buckets){
                if(Gsa.buckets[i].hasResults){
                    return true;
                }
            }
            return false;
        }

        $scope.allLoaded = function(){
            if($scope.currentView == 'cards'){
                for(var i in Gsa.buckets){
                    if(!Gsa.buckets[i].loaded){
                        return false;
                    }
                }
                return true;
            }else{
                return Gsa.buckets[$scope.params.site].loaded;
            }
            
        }
    }
])
.filter('html', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
//workaround for html5mode = false
var parseLocation = function(location) {
    var pairs = location.substring(1).split("&");
    var obj = {};
    var pair;
    var i;

    for ( i in pairs ) {
      if ( pairs[i] === "" ) continue;

      pair = pairs[i].split("=");
      obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
    }

    return obj;
};
function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    console.log('if ', uri.replace(re, '$1' + key + "=" + value + '$2'));
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    console.log('else ', uri + separator + key + "=" + value);
    return uri + separator + key + "=" + value;
  }
}