
//==================================================================

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//====================================================================
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//====================================================================
function getParameterFromUrl(name,searchUrl) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(searchUrl);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//====================================================================




var userDeviceType = navigator.userAgent;
if ((userDeviceType.match(/Android/i)) | (userDeviceType.match(/BlackBerry/i)) | (userDeviceType.match(/iPhone|iPad|iPod/i)) | (userDeviceType.match(/Opera Mini/i)) | 
(userDeviceType.match(/IEMobile/i))) {
    userDeviceType = "Mobile";
}
else {
    userDeviceType = "Desktop";
}


var userGeoLocationEnabled = getCookie("UserGeoLocationEnabled");
if (userGeoLocationEnabled != "") {
    if (userGeoLocationEnabled.toLowerCase() == "true") {
        userGeoLocationEnabled = "on";
    }
    else {
        userGeoLocationEnabled = "off";
    }

}
else {
    userGeoLocationEnabled = "off";
}
var gsaPageName = "SearchResultspage";
var numberOfSearchResultsReturned= "Zero";

if($(".spelling_suggestion").text()!="")
    gsaPageName = "ZeroSearchResults_withRecommendation";
else if($("#keywordSearch").text() =="")
    gsaPageName ="ZeroSearchResults_withoutRecommendation";
if($("#ttlresults").text()!="")
    numberOfSearchResultsReturned = $("#ttlresults").text();
var utag_data;
if((getParameterByName("site") == "bupa_all" || getParameterByName("site") == "") && (getParameterByName("start") == "" || getParameterByName("start") == "0" ))
{
    utag_data = {
        scCountry : "uk",
        scBrand:"bupa",
        scGeoLocate : userGeoLocationEnabled,
        scDeviceType: userDeviceType,
        scSiteSearchTerm : "GSA:" + $("#gsa_search").val(),
        scBcsHomeResults : "GSA:" + numberOfSearchResultsReturned,    
        scSearchSegmentationType: + getParameterByName("SearchType"),
        UniquePageIdentifier:"global-search-activity",
        pageName:"b:uk:globalsearch:"+gsaPageName 
    };
}

//============================================================================
function filtersClicked(htmlHref) {

    /*utag.track("link", {
        scCountry: "uk",
        scBrand: "bupa",
        UniquePageIdentifier: "global-search-activity",
        scPageInteraction: "GlobalSearchActivity:Filter-" + htmlHref.text,
        scBcsSearchFilter: "GlobalSearchActivity:" + htmlHref.text,
        link_type: "o",
        link_text: "GlobalSearchActivity|Popular-" + htmlHref.text,
        linkpageName: "searchoverlay"
    });*/


    utag.view({
        scCountry : "uk",
        scBrand:"bupa",
        scGeoLocate : userGeoLocationEnabled,
        scDeviceType:userDeviceType,
        UniquePageIdentifier:"global-search-activity",
        pageName:"b:uk:globalsearch:searchresult:" + htmlHref.text
    });

    setTimeout(function () {
        window.location.href = $(htmlHref).attr('href');
        return true;
    }, 500);
}
//====================================================================


function paginitionLinkClick(htmlHref) {
    utag.track("link", {
        scCountry: "uk",
        scBrand: "bupa",
        scPageInteraction: "GlobalSearchActivitylPagination:" + htmlHref.text,
        UniquePageIdentifier: "global-search-activity",
        link_type: "o",
        link_text: "GlobalSearchActivitylPagination:" + htmlHref.text,
        linkpageName: "searchresultspage"
    });
    setTimeout(function () {
        window.location.href = $(htmlHref).attr('href');
        return true;
    }, 500);
}
//==================================================================
function searchResultLinkClick(htmlHref) {
    var searchLinkurl = htmlHref.href.toLowerCase();

    if (searchLinkurl.indexOf(".pdf") > -1 || searchLinkurl.indexOf(".doc") > -1 || searchLinkurl.indexOf(".docs") > -1) {
        var docName = searchLinkurl.substring(searchLinkurl.lastIndexOf("/") + 1);
        utag.track("link", {
            scCountry: "uk",
            scBrand: "bupa",
            UniquePageIdentifier: "global-search-activity",
            scPageInteraction: "GlobalSearchActivity:download-" + docName,
            link_type: "o",
            link_text: "GlobalSearchActivity|download-" + docName,
            linkpageName: "searchresultspage"
        });
    }

    else {
        utag.track("link", {
            scCountry: "uk",
            scBrand: "bupa",
            UniquePageIdentifier: "global-search-activity",
            scPageInteraction: "GlobalSearchActivity:" + htmlHref.text,
            link_type: "o",
            link_text: "GlobalSearchActivity|" + htmlHref.text,
            linkpageName: "searchresultspage"
        });
    }
    setTimeout(function () {
        window.location.href = $(htmlHref).attr('href');
        return true;
    }, 500);

}

//==================================================================
function searchResultVideoLinkClick(htmlHref) {

    var searchResultTitle = $(htmlHref).closest('div[class^="result_holder"]').find('a:first').text();
    var videoId = getParameterFromUrl("v",  $(htmlHref).attr('href'));
    utag.track("link", {
        scCountry: "uk",
        scBrand: "bupa",
        scVideoName: searchResultTitle + ":" + videoId,
        scPageInteraction: "GlobalSearchActivityl:"+searchResultTitle + ":" + videoId,
        UniquePageIdentifier: "global-search-activity",
        link_type: "o",
        link_text: "GlobalSearchActivityl:"  +searchResultTitle + ":" + videoId,
        linkpageName: "searchresultspage"
    });

}
//==================================================================
function searchResultClusterLinkClick(htmlHref) {

    var urlGlobalCluster = $(htmlHref).attr('href');
    if (getParameterFromUrl("v", $(htmlHref).attr('href')) != "")
        urlGlobalCluster = urlGlobalCluster.replace("SearchType=Global", "SearchType=GlobalCluster");
    else
        urlGlobalCluster = urlGlobalCluster + "&SearchType=GlobalCluster";
    window.location.href = urlGlobalCluster;
    return true;
}
//===============================================================