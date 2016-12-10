'use strict'


var path = require('path');
console.log("hello");

var express =require(path.join(__dirname, 'config/express.js'));

var port = 8080;

var app = express();

require(path.join(__dirname, '/app/routes/index.server.routes.js'))(app);


app.listen(port, function(){
	console.log('Server is running on port ' + port);
});