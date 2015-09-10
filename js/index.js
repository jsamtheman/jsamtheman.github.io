$(document).ready(function(){
	$('header').slideDown(750);
	$('#hero').delay(750).show("scale",1500);

	// $(window).bind("scroll", function() {
	//     if ($(this).scrollTop() > 520) {
	//         $("#about").fadeIn();
	//     } else {
	//         $("#about").stop().fadeOut();
	//     }
	//     if ($(this).scrollTop() > 650) {
	//         $("#work").fadeIn();
	//     } else {
	//         $("#work").stop().fadeOut();
	//     }
	//     if ($(this).scrollTop() > 800) {
	//     	$("#sketches").fadeIn();
	//     	} else {
	// 		$("#sketches").fadeOut();
	// 	}
	// });


	var userFeed = new Instafeed({
		get: 'user',
		userId: 1516143953,
		sortBy: 'most-recent',
		resolution: 'low_resolution',
		template: '<li><a href="{{link}}" target="_blank" class="instagram"><img src="{{image}}" width="175px" height="175px"  /></a></li>',
		accessToken: '1516143953.06cc125.7cde4859f8264a77ad4467556e978bb6',
		limit: 60,
	});
	userFeed.run();

	$("#instafeed").simplyScroll({
		autoMode: 'loop',
		startOnLoad: true,
		auto: true,
		speed: 1,
		pauseOnHover: true,
		pauseOnTouch: true
	});
});
