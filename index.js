const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.get('/',function(req,res){
	res.sendFile('login.html');
})

app.listen(PORT)