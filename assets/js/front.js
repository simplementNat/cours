
$(function () {

    fullScreenContainer();
    utils();
    sliding();
});

$(window).load(function () {
    windowWidth = $(window).width();
    $(this).alignElementsSameHeight();

});
$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
	setTimeout(function () {
	    $(this).alignElementsSameHeight();
	    fullScreenContainer();
	    waypointsRefresh();
	}, 205);
	windowWidth = newWindowWidth;
    }

});



/* =========================================
 * sliding 
 *  =======================================*/

function sliding() {
    $('.scrollTo, #navigation a').click(function (event) {
	event.preventDefault();
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];

	$('body').scrollTo($('#' + trgt), 800, {offset: -80});

    });
}


/* =========================================
 * full screen intro 
 *  =======================================*/

function fullScreenContainer() {

    var screenWidth = $(window).width() + "px";
    var screenHeight = '';
    if ($(window).height() > 500) {
	screenHeight = $(window).height() + "px";
    }
    else {
	screenHeight = "500px";
    }


    $("#intro, #intro .item").css({
	width: screenWidth,
	height: screenHeight
    });
}


/* =========================================
 *  UTILS
 *  =======================================*/

function utils() {

    /* tooltips */

    $('[data-toggle="tooltip"]').tooltip();

    /* external links in new window*/

    $('.external').on('click', function (e) {

	e.preventDefault();
	window.open($(this).attr("href"));
    });
    /* animated scrolling */

}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

	var maxHeight = 0;
	var children = $(this).find('.same-height');
	children.height('auto');
	if ($(window).width() > 768) {
	    children.each(function () {
		if ($(this).innerHeight() > maxHeight) {
		    maxHeight = $(this).innerHeight();
		}
	    });
	    children.innerHeight(maxHeight);
	}

	maxHeight = 0;
	children = $(this).find('.same-height-always');
	children.height('auto');
	children.each(function () {
	    if ($(this).height() > maxHeight) {
		maxHeight = $(this).innerHeight();
	    }
	});
	children.innerHeight(maxHeight);
    });
}

/* refresh scrollspy */
function scrollSpyRefresh() {
    setTimeout(function () {
	$('body').scrollspy('refresh');
    }, 1000);
}

/* refresh waypoints */
function waypointsRefresh() {
    setTimeout(function () {
	$.waypoints('refresh');
    }, 1000);
}

