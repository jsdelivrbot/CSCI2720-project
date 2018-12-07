//init
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var async = require('async');
var bcrypt = require('bcryptjs');
var fs = require('fs');

//Input Database here
mongoose.connect('mongodb+srv://csci2720:2720@cluster0-n9g6h.mongodb.net/db2');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

//Schema
var UserSchema = new mongoose.Schema({
    loginId: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

var EventSchema = new mongoose.Schema({
	organisationName: {type: String, required: true},
	activityName: {type: String, required: true},
	date: {type: String, required: true},
	location: {type: String, required: true},
	charitable: {type: String, required: true}
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

//Login function, check id pw
app.get('/user/check', function(req, res){
	User.findOne({
	loginId: String(req.body['id'])
	},
	function(err, result){
		if(err){
			res.send(err);
		}
		if(result){
			if(result.password == String(bcrypt.hashSync(req.body['pw']))){
				res.send("0"); // both id & pw is right
			}
			else { // id is right, not pw
				res.send("1");
			}
		}
		else {//!result = no id matching in db
		     res.send("2");
		}
	});
});

//Get event from database(Possibly use post)
app.get('/event',function(req,res){
    var tmp = '';
    Event.find(function(err, results){
    	results.forEach(function(element){
    		tmp += '<li class="collection-item avatar"><i class="material-icons circle green">event</i><span class="title">';
    		tmp += element.organisationName + '</span><p>';
    		tmp += element.activityName + '<br>';
    		tmp += element.location + '<span style="float:right;">' + element.date + '</span></p><a href="#!" class="secondary-content"><i class="material-icons">grade</i></a></li>';
    	});
    	if(tmp == ''){
    		res.send("No event!");
    	}else{
    		res.send(tmp);
    	}
    });
});

app.get('/data',function(req,res){
	var obj;
	fs.readFile('data.json',function(err, data){
		obj = JSON.parse(data);
		obj.activities.forEach(function(result){
			var e = new Event({
				organisationName: result.organisationNameEnglish,
				activityName: result.activityNameEnglish,
				date: result.schedule[0].dateFrom,
				location: result.districtNameEnglish,
				charitable: result.charitable
			});
			e.save();
		});
	});
	res.send("Done!");
});


app.use('/', express.static(__dirname + '/'));

app.listen(PORT)
