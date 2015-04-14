// JavaScript Document
(function($) {
	
function init() {
	removeBR();
	showHidePagination();
	resizeAndLoad();
	clearSearchField();
}

function removeBR() {
	$(window).load(function() {
		$('.snippet_result br').remove();
	});
}//removeBR

function showHidePagination() {
	/* show or hide pagination on initial load */
$(window).load(function(){
	if ( $(window).width() < 650 ) {
    $('#mobile_pagination').show();
    $('#bottom_navigation_holder').hide();
  } //if

  else {
    $('#mobile_pagination').hide();
    $('#bottom_navigation_holder').show();
  }; //else
}); // window.load
  
$(window).resize(function() {
  if ( $(window).width() < 650 ) {
    $('#mobile_pagination').show();
    $('#bottom_navigation_holder').hide();
  } //if

  else {
    $('#mobile_pagination').hide();
    $('#bottom_navigation_holder').show();
  }; //else

}); //resize
} //showHidePagination

function clearSearchField() {
	$(window).load(function() {
		var clearIcon = $('img.searchClear');
		clearIcon.click(function () {
					$('#inputfield').val('');
					console.log('clicked');
				});
	});
}

function addHellipToNav() {
	lastPage = $('.pagination_link a').last().text();
	$('.pagination_link a').last().text(lastPage+' ...');
}

function resizeAndLoad() {
	var originalHeaderText = 'Search Allianz';
	$(window).load(function(){
		if ($(window).width() < 650 && originalHeaderText == 'Search Allianz') {
 		   $('#header h1').text('Search');
		} //if

  		else {
    		$('#header h1').text(originalHeaderText);
  		} //else
	}); // windowLoad
	
	$(window).resize(function() {
  if ( $(window).width() < 650 && originalHeaderText == 'Search Allianz' ) {
    $('#header h1').text('Search');
  } //if

  else {
   $('#header h1').text(originalHeaderText);
  } //else

}); //resize
	
} //resizeAndLoad


	init();

})(jQuery);