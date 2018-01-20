module.exports = function(msg, time = msg.length){
	return msg.concat("!".repeat(time));

};
