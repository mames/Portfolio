$('#family').waypoint(function() {
	$('#illustrations img').removeClass('opaque');

	$('#illustrations img').eq(0).addClass('opaque');
});

$('#annie').waypoint(function() {
	$('#illustrations img').removeClass('opaque');

	$('#illustrations img').eq(1).addClass('opaque');
});

$('#brain').waypoint(function() {
	$('#illustrations img').removeClass('opaque');

	$('#illustrations img').eq(2).addClass('opaque');
});

$('#intel').waypoint(function() {
	$('#illustrations img').removeClass('opaque');

	$('#illustrations img').eq(3).addClass('opaque');
});
// "url('../images/about/Annie.jpg')"