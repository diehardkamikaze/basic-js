const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	var result;
	var fullstr;
	
	if (options.separator === undefined)
		options.separator = '+';
	if (options.additionSeparator === undefined)
		options.additionSeparator = '|';
	if (options.addition === undefined)
		options.addition = '';
	result = "";
	fullstr = "";
	fullstr = fullstr + options.addition;
	while (--options.additionRepeatTimes)
			fullstr = fullstr + options.additionSeparator + options.addition;
	fullstr = str + fullstr;
	result = fullstr;
	while (--options.repeatTimes)
		result += options.separator + fullstr;
	return (result);
};

 
