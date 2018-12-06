//init
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var async = require('async');
var bcrypt = require('bcryptjs');

//Input Database here
mongoose.connect('mongodb+srv://csci2720:2720@cluster0-n9g6h.mongodb.net/db2');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

//Schema
var UserSchema = new mongoose.Schema({
    loginId: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

//The event schema is just temp, will change to real data later
var EventSchema = new mongoose.Schema({
	eventName: {type: String, required: true},
	date: {type: String, required: true},
	location: {type: String, required: true}
});

var User = mongoose.model('User', UserSchema);
var Event = mongoose.model('Event', EventSchema);

//Get Post Delete

//Create Account
app.post('/test',function(req,res){
	var u = new User({
		loginId: String(req.body['loginId']),
		password: String(bcrypt.hashSync(req.body['password']))
	});
	var e1 = new Event({
		eventName: "test",
		date: "9-9-2018",
		location: "Hong Kong"
	});
	e1.save();

	var e2 = new Event({
		eventName: "test2",
		date: "2-9-2018",
		location: "Taiwan"
	})
	e2.save();
	u.save(function(err){
		if(err)
			res.send(err)
		res.send("Account created! Login Id: "+req.body['loginId']);
	});

});

app.post('/user',function(req,res){
	res.sendFile(__dirname + '/user.html');
});

app.get('/user',function(req,res){
	res.sendFile(__dirname + '/user.html');
});

app.use('/', express.static(__dirname + '/'));

app.listen(PORT)