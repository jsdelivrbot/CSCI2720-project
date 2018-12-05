$(document).ready(function(){

    $('.modal').modal();

    $('#createAccount').click(function(){
    	$.post("/test", {
    		loginId: $('#name2').val(),
    		password: $('#password2').val()
    	}, function(data) {
			alert(data);
		});
    });

    $('#loginButton').click(function(){
    	$.get("/user.html",function(data){
    		window.history.pushState(null, null, "/user");
    		$.getScript("user.js");
    		$("html").html(data);
    	});
    });
});