'use strict'

var path = require('path');
var express = require('express');

module.exports = function(){
	var app = express();

	app.use(express.static('./public'));
	app.set('views', path.join(__dirname, '../app/views'));
	app.set('view engine', 'ejs');

	return app;
};

