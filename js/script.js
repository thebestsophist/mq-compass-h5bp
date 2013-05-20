/* Author: 

*/



$(document).ready(function(){
	$('body').removeClass('no-js');
});



/* Only < 48em */
if (Modernizr.mq('only screen and (max-width: 767px)')) {

}

/* Anything > 48em */
if (Modernizr.mq('only screen and (min-width: 768px)')) {

}

/* Between 48em and 60em */
if (Modernizr.mq('only screen and (min-width: 768px) and (max-width: 960px)')) {

}

/* Anything > 60em */
if (Modernizr.mq('only screen and min-width: 960px)')) {

}


/* High pixel density */
if (window.devicePixelRatio >= 1.5) {

}

/* Portrait orientation */
if (window.orientation == 0 || 180) {

}

/* Landscape orientation */
if (window.orientation == 90 || 240) {

}