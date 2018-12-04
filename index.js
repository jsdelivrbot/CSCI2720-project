//init
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var async = require('async');

//Input Database here
mongoose.connect('mongodb+srv://csci2720:2720@cluster0-n9g6h.mongodb.net/db2');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

//Start here!
app.post('/test',function(req,res){
	res.send(req.body['name']);
});

app.use('/', express.static(__dirname + '/'));

app.listen(PORT)