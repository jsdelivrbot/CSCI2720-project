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
    		$("html").html(data);
    		 window.history.pushState(null, null, "/user");
    	});
    });
});