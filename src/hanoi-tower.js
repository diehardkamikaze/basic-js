const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	var result;
	
	result = 2**disksNumber - 1;
	return { turns: result, seconds: Math.floor(3600 / turnsSpeed * result)};
};
