angular.module('buparesults', ['bupasearchservice'])
.directive('resultscard', ['Gsa', '$location', function(Gsa, $location) {
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
        var pageNo = parseInt(scope.params.page);
        if(scope.mode == 'cards'){
            pageNo = 1
        }
    	Gsa.search(scope.params.q, scope.collection, scope.numResults, pageNo, scope.params);
        scope.buckets = Gsa.buckets;
    }
  };
}]);