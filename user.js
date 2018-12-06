$(document).ready(function(){
	$('.sidenav').sidenav();

	$.get("/event",function(data){
		//$('#eventList').append(data);
	});
});