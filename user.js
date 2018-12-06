$(document).ready(function(){
	$('.sidenav').sidenav();

	$.get("/event",function(data){
		$('#eventList').append(data);
	});

	$('.event').click(function(){
		console.log($(this).attr('id'));
		$('#modal2').modal();
		$('#modal2').modal('open');
	});
});