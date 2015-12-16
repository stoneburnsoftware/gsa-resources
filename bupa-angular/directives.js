angular.module('buparesults', ['bupasearchservice'])
.directive('resultscard', ['Gsa', '$location', 'uiGmapGoogleMapApi', 'uiGmapIsReady',
    function(Gsa, $location, uiGmapGoogleMapApi, uiGmapIsReady) {
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
            //supply int of 2 as its the number of maps on the page
            uiGmapIsReady.promise(2).then(function (maps) {
            	//set the zoom on all maps to a minumum level if exceeded.
            	for(var i in maps){
            		var map = maps[i].map
            		if(map.getZoom() > 15){
            			map.setZoom(15)
            		}
            	}
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