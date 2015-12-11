angular.module('buparesults', ['bupasearchservice'])
.directive('resultscard', ['Gsa', '$location', 'uiGmapGoogleMapApi',
    function(Gsa, $location, uiGmapGoogleMapApi) {
  return {
    restrict: 'A',
    templateUrl: bupaconst.resourceuri + 'resultsTemplate.html',
    scope:{
    	collection: '@',
        config: '=',
        mode: '@',
        params:'=',
        numResults:'@'
    },
    link: function(scope, elem, attrs){
        scope.bupaconst = bupaconst;
        var pageNo = parseInt(scope.params.page);
        if(scope.mode == 'cards'){
            pageNo = 1
        }
    	Gsa.search(scope.params.q, scope.collection, scope.numResults, pageNo, scope.params);
        scope.buckets = Gsa.buckets;

        //maps data
        if(scope.collection == bupaconst.coll_maps_name){
            uiGmapGoogleMapApi.then(function(maps) {
                 scope.map = { 
                    center: { latitude: 54, longitude: -3 },
                    zoom: 6,
                    pan: false
                };
                 scope.map2 = { 
                     center: { latitude: 54, longitude: -3 },
                     zoom: 6,
                     pan: false
                 };//make a separate map for responsive use
            });
        }
    }
  };
}])
.directive('prettyp', function(){
  return function(scope, element, attrs) {
    $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false});
  }
})