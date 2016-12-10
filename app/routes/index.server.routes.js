'use strict'

var path = require('path');

module.exports = function(app){
	console.log("Dirname: " + __dirname);
	var index = require(path.join(__dirname, '../controllers/index.server.controller.js'));
	app.get('/', index.render);
} 



