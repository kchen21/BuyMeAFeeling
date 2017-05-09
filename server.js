var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://root:cheers21@ds133388.mlab.com:33388/buy_me_a_feeling', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.use(morgan('dev'));

app.get('/', function(req, res) {
  var name = "Ken";
  res.json("My name is " + name);
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("Server is Running on port 3000");
});
