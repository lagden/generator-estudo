'use strict';

function out(msg) {
	msg = Array.isArray(msg) ? msg.join('\n') : msg;
	console.log(msg);
}

export {out};
