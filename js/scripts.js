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

function dateHoverArrowColour041815a () {
	$('section.recentPosts .date').hover(function() {
		$(this).css('background', 'rgba(36, 143, 103,0.8)');
		$(this).find(':after').css('border-left', '1.875em solid rgba(36, 143, 103,0.8)');
		// $('section.recentPosts .date::after').css('background', 'rgba(36, 143, 103,0.8)');
	}, function() {
		$(this).css('background', 'rgba(255, 244, 161,1)');
		$(this).find(':after').css('border-left', '1.875em solid rgba(255, 244, 161,1)');
		// $('section.recentPosts .date::after').css('background', 'rgba(255, 244, 161,1)');
	});
}

function dateArrowAnimate041815a () {
	$('section.recentPosts li div.copy').hover(function() {
		console.log('Hover over...');
		$(this).parent('li').find('.date').toggle('slide')
	}, function() {
		console.log('Hover out...');
		$(this).parent('li').find('.date').toggle('slide')
	});
}

function dateArrowAnimate041915a () {
	$('section.recentPosts li div.copy').hover(function() {
		console.log('Hover over...');
		$(this).parent('li').find('.date').animate({
			"width": "+=2%"
		}, 500)
	}, function() {
		console.log('Hover out...');
		$(this).parent('li').find('.date').animate({
			"width": "-=2%"
		}, 500)
	});
}

function heroBlockMetaAnimate041815a (argument) {
	$('.metaHolder').hide();
	$('.metaHolder').toggle('slide');
}

//////////////////////////////////////////////////
// EXECUTION CODE

window.onload = function () {
	heroBlockMetaAnimate041815a();
}

heroBlockSlider041515a();
dropDownMenuClick041715a();
portfolioHoverSearchMode041815a();
blogHoverSearchMode041815a();
// dateHoverArrowColour041815a();
// dateArrowAnimate041815a();
dateArrowAnimate041915a();



//////////////////////////////////////////////////

});  //end doc.onready function
