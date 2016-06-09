'use strict';

const http = require('http');
const socket = require('socket.io');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.use(express.static('.'));

app.get('/', function(req,res) {});

const io = socket(server);

let connectedUsers = 0;

io.on('connection', function(socket) {
	connectedUsers += 1;
	socket.emit('connectedUser', connectedUsers);
	socket.on('direction', function(data) {
		console.log(data);
		io.emit('robot:direction',data.direction);
	});
	socket.on('disconnect', function() {
		console.log('disconnect');
		connectedUsers -= 1;
		socket.emit('connectedUser', connectedUsers);
	});
});


io.listen(4557);

app.listen(4555);
console.log('Listening on port 4555');



