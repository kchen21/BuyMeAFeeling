var express = require('express');

var app = express(3000, function(err) {
  if (err) throw err;
  console.log("Server is Running on port 3000");
});
