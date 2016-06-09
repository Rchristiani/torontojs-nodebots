'use strict';

const j5 = require('johnny-five');
const board = new j5.Board();
const io = require('socket.io-client');
const socketIO = require('socket.io');
const http = require('http');

socketIO.listen('4556');

const socket = io.connect('http://robotfriends.club:4557');
socket.on('connect', function() {
	board.on('ready', () => {

	});
});