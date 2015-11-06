angular.module('bupasearchservice', [])
.service('Gsa', ['$http', '$q', function($http, $q){
	return {
		search: function(q, site){
			var deferred = $q.defer();
			$http.get(bupaconst.gsauri + '/search?q='+q+'&site='+site+'&client=legalview&proxystylesheet=json&getfields=*')
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