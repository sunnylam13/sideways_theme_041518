jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

function heroBlockSlider041515a () {
	// you must use the class to call it
	$('#bxslider').bxSlider({
		controls: true,
		// auto: true,
		// slideWidth: 1440,
		autoControls: true
	});
}

function dropDownMenuClick041715a () {
	$('ul.navbar li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		$('ul.navbar ul.subnavmenu1').toggle('slow');
	});
}

function portfolioHoverSearchMode041815a () {
	$('.portfolio_unit').hover(function() {
		$(this).find('.imgShaderScreen1').css('display', 'flex');
	}, function() {
		$(this).find('.imgShaderScreen1').css('display', 'none');
	});
}

function blogHoverSearchMode041815a () {
	$('.blog_entry').hover(function() {
		$(this).find('.imgShaderScreen1').css('display', 'flex');
	}, function() {
		$(this).find('.imgShaderScreen1').css('display', 'none');
	});
}

//////////////////////////////////////////////////
// EXECUTION CODE

heroBlockSlider041515a();
dropDownMenuClick041715a();
portfolioHoverSearchMode041815a();
blogHoverSearchMode041815a();

//////////////////////////////////////////////////

});  //end doc.onready function
