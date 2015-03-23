//Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var serveStatic = require('serve-static');
var http = require('http');
var io = require('socket.io');
app.use(serveStatic(__dirname ));



var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);


//SOCKET IO
io = io.listen(app.listen(process.env.PORT || 3001));



