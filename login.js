$(document).ready(function(){
    $('.modal').modal();
    $('#createAccount').click(function(){
    	$.post("/test", function(data) {
			alert(data);
		});
    });
});