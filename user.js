$(document).ready(function(){
	$('.sidenav').sidenav();

	$.get("/event",function(data){
		$('#eventList').append(data);
	});

	$('.event').click(function(){
		$('#modal2').modal();
		$('#modal2').modal('open');
	});
});