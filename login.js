$(document).ready(function(){
    $('.modal').modal();
    $('#createAccount').click(function(){
    	$.post("/test", {
    		loginId: '2345',
    		password: '6789'
    	}, function(data) {
			alert(data);
		});
    });
});