$(document).ready(function(){
	$('.sidenav').sidenav();

	$.get("/event",function(data){
		$('#eventList').append(data);
	});

	$('#eventList').click(){
		console.log($(this).attr('id'));
	}
});