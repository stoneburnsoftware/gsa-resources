angular.module('buparesults', ['bupasearchservice'])
.directive('resultscard', ['Gsa', function(Gsa) {
  return {
    restrict: 'A',
    templateUrl: bupaconst.resourceuri + 'resultsTemplate.html',
    scope:{
    	collection: '@',
        config: '=',
        mode: '@',
        query:'@',
        numResults:'@'
    },
    link: function(scope, elem, attrs){
    	Gsa.search(scope.query,scope.collection,scope.numResults).then(function(data) {
		    return scope.results = data;
		});
    }
  };
}]);