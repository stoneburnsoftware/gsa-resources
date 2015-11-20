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
    	Gsa.search(scope.params.q, scope.collection, scope.numResults, pageNo).then(function(data) {
            if(data.GSP.RES){
                scope.config.hasResults = true;
            }else{
                scope.config.hasResults = false;
            }
            scope.config.loaded = true;
		    scope.results = data;

            if(scope.mode == 'fullscreen'){

                //paging processing
                data.GSP.RES.SN = parseInt(data.GSP.RES.SN);
                data.GSP.RES.EN = parseInt(data.GSP.RES.EN);
                data.GSP.RES.M = parseInt(data.GSP.RES.M);

                //console.log('data.GSP.RES.M', data.GSP.RES.M);
                if(!(pageNo>0)){
                    pageNo = 1;
                }

                if(data.GSP.RES.M > scope.numResults){
                    //there are pages
                    var lastPage = parseInt(Math.ceil(data.GSP.RES.M/scope.numResults)); 

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
                    scope.pages = [];
                    var p = jQuery.extend({}, scope.params);
                    for (var i=startPage; i <= endPage; i++){
                        p.page = i;
                        scope.pages.push({
                            num: i,
                            href: $location.path()+ '?' + jQuery.param(p),
                            selected: (i == pageNo)
                        });
                    }  
                    //console.log("scope.pages=", scope.pages);

                    p.page = (pageNo-1);
                    scope.prevPage = {
                        enabled: (pageNo > 1),
                        href: $location.path()+ '?' + jQuery.param(p)
                    };

                    p.page = (pageNo+1);
                    scope.nextPage = {
                        enabled: (pageNo < lastPage),
                        href: $location.path()+ '?' + jQuery.param(p)
                    };
                }
            }
   
		});
    }
  };
}]);