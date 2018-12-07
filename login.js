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

//Id & Pw check
    $('#loginButton').click(function(){
	    $.get("/user/check", {
	    	id: $('#name').val(),
		pw: $('#password').val()
	    }, function(data){
		    if (data == "0") {
			    alert("Login clear!");
		    }
		    else if (data == "1"){
			    alert("Wrong password!");
		    }
		    else if (data == "2"){
		    	    alert("Wrong Id!");
		    }
		    else{
			    alert(data)
		    }
	    	});
	    
    	/* $.get("/user",function(data){
    		window.history.pushState(null, null, "/user");
    		
		    var newDoc = document.open("text/html", "replace");
		    newDoc.write(data);
		    newDoc.close();
		    
    	});*/
    });
});
