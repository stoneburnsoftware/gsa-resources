angular.module('bupasearchservice', [])
.service('Gsa', ['$http', '$q', '$location', function($http, $q, $location){
	var buckets = {};
	return {
		buckets: buckets,
		search: function(q, site, numResults, pageNo, currentParams){

			/////////////////////

			pageNo = parseInt(pageNo);
			numResults = parseInt(numResults);

			if(!(pageNo>0)){
                pageNo = 1;
            }
			//decrement because we work on a 0 index start
			var start = (pageNo - 1) * numResults;

			var url = bupaconst.gsauri + '/search?q='+encodeURIComponent(q)+'&site='+site+'&num='+numResults+'&start='+start+'&client=bupa&proxystylesheet=json&getfields=*&filter=0';
			$http.get(url)
			.then(successCallback, errorCallback);

			function successCallback(response){

	            if(response.data.GSP.RES){
	                response.data.hasResults = true;
	            }else{
	                response.data.hasResults = false;
	            }
	            response.data.loaded = true;

	            if(response.data.hasResults){

	                //paging processing
	                response.data.GSP.RES.SN = parseInt(response.data.GSP.RES.SN);
	                response.data.GSP.RES.EN = parseInt(response.data.GSP.RES.EN);
	                response.data.GSP.RES.M = parseInt(response.data.GSP.RES.M);

	                //console.log('data.GSP.RES.M', data.GSP.RES.M);
	                if(response.data.GSP.RES.M > numResults){
	                    //there are pages
	                    var lastPage = parseInt(Math.ceil(response.data.GSP.RES.M/numResults)); 

	                    //add in pageNo
	                    if(pageNo > lastPage){
	                        pageNo = lastPage;
	                    }

	                    //////////////////////page windowing
	                    var pageWindowSize = 5;
	                    
	                    //start of page window
	                    var startPage = pageNo - (Math.round((pageWindowSize-1)/2));
	                    
	                    //keep the window a fixed size from the last page
	                    var startThreshold = lastPage - pageWindowSize + 1;
	                    if(startPage > startThreshold){
	                        startPage = startThreshold;
	                    }
	                    
	                    //guard against the number of pages being smaller than the window
	                    if(startPage < 1){
	                        startPage = 1
	                    }
	                    
	                    //end of page window
	                    var endPage = startPage + pageWindowSize - 1;
	                    
	                    //guard against the number of pages being smaller than the window
	                    if(lastPage < endPage){
	                        endPage = lastPage;
	                    }
	                    //console.log("startPage=" + startPage);
	                    //console.log("endPage=" + endPage);
	                    //console.log("threshold=" + startThreshold);

	                    //build paging array
	                    response.data.pages = [];
	                    var p = jQuery.extend({}, currentParams);
	                    for (var i=startPage; i <= endPage; i++){
	                        p.page = i;
	                        response.data.pages.push({
	                            num: i,
	                            href: $location.path()+ '?' + jQuery.param(p),
	                            selected: (i == pageNo)
	                        });
	                    }  
	                    //console.log("scope.pages=", scope.pages);

	                    p.page = (pageNo-1);
	                    response.data.prevPage = {
	                        enabled: (pageNo > 1),
	                        href: $location.path()+ '?' + jQuery.param(p)
	                    };

	                    p.page = (pageNo+1);
	                    response.data.nextPage = {
	                        enabled: (pageNo < lastPage),
	                        href: $location.path()+ '?' + jQuery.param(p)
	                    };
	                }
           		}
           		buckets[site] = response.data;
			}

			function errorCallback(response){
				console.log('Error occurred during GSA search.', response)
			}
		}
	}
	
}])