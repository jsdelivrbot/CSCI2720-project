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
    		console.log(data);
    		$("html").html(data);
    	});
    });
});

$(document).load(data);
 window.history.pushState(null, null, "/user");