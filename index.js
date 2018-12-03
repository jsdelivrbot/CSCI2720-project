const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.get('/',function(req,res){
	res.send('login.html');
})

app.listen(PORT)