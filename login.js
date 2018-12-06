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
    	$.get("/user",function(data){
    		window.history.pushState(null, null, "/user");

		    var newDoc = document.open("text/html", "replace");
		    newDoc.write(data);
		    newDoc.close();
    	});
    });
});
