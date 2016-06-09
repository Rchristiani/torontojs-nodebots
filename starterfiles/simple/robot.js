'use strict';
//require johnny-five
const j5 = require('johnny-five');

const board = new j5.Board();

board.on('ready',function(){
	const motorOne = new j5.Motor({
		pins: {
			pwm: 3,
			dir: 2
		},
		invertPWM: true
	});

	const motorTwo = new j5.Motor({
		pins: {
			pwm: 5,
			dir: 4
		},
		invertPWM: true
	});

	this.repl.inject({
		motorOne,
		motorTwo
	});
});