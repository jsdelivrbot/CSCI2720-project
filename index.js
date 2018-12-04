const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.post('/test',function(req,res){
	res.send("Hello");
});

app.use('/', express.static(__dirname + '/'));

app.listen(PORT)