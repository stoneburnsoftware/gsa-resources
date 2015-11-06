angular.module('buparesults', ['bupasearchservice'])
.directive('resultscard', ['Gsa', function(Gsa) {
  return {
    restrict: 'A',
    templateUrl: bupaconst.resourceuri + 'resultsTemplate.html',
    scope:{
    	collection: '@',
        title: '@'
    },
    link: function(scope, elem, attrs){
    	console.log('created results template directive for ', scope.collection);
    	Gsa.search('bupa',scope.collection).then(function(data) {
		    return scope.results = data;
		});
    }
  };
}]);