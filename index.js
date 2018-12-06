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

//Create Account(Try not to use test)
app.post('/test',function(req,res){
	var u = new User({
		loginId: String(req.body['loginId']),
		password: String(bcrypt.hashSync(req.body['password']))
	});
	u.save(function(err){
		if(err)
			res.send(err)
		res.send("Account created! Login Id: "+req.body['loginId']);
	});
});

//Change it to post later to get user information
app.get('/user',function(req,res){
	res.sendFile(__dirname + '/user.html');
});

//Get event from database(Possibly use post)
app.get('/event',function(req,res)){
    var tmp = '';
    Event.find(function(err, results){
    	results.forEach(function(element){
    		tmp += '<li class="collection-item avatar"><i class="material-icons circle green">event</i><span class="title">'
    		tmp += element.eventName + '</span><p>'
    		tmp += element.date + '<br>'
    		tmp += element.location + '</p><a href="#!" class="secondary-content"><i class="material-icons">grade</i></a></li>'
    	});
    	if(tmp == ''){
    		res.send("No event!");
    	}else{
    		res.send(tmp);
    	}
    });
}

app.use('/', express.static(__dirname + '/'));

app.listen(PORT)