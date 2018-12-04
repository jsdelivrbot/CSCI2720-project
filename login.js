$(document).ready(function(){
    $('.modal').modal();
    $('#createAccount').click(function(){
    	$.post("/test", {
    		name: 'User1'
    	}, function(data) {
			alert(data);
		});
    });
});