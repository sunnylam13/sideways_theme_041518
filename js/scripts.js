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

//////////////////////////////////////////////////
// EXECUTION CODE

heroBlockSlider041515a();
dropDownMenuClick041715a();

//////////////////////////////////////////////////

});  //end doc.onready function
