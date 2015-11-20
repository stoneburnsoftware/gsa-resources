angular.module('bupasearchservice', [])
.service('Gsa', ['$http', '$q', function($http, $q){
	return {
		search: function(q, site, numResults, pageNo){
			pageNo = parseInt(pageNo);
			numResults = parseInt(numResults);

			if(pageNo === null || pageNo < 1){
				pageNo = 1;
			}
			//decrement because we work on a 0 index start
			var start = (pageNo - 1) * numResults;

			var deferred = $q.defer();
			var url = bupaconst.gsauri + '/search?q='+encodeURIComponent(q)+'&site='+site+'&num='+numResults+'&start='+start+'&client=legalview&proxystylesheet=json&getfields=*&filter=0';
			$http.get(url)
			.then(successCallback, errorCallback);

			function successCallback(response){
				deferred.resolve(response.data);
			}

			function errorCallback(response){
				console.log('Error occurred during GSA search.', response)
				deferred.resolve();
			}
			return deferred.promise;
		}
	}
	
}])