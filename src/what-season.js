const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	var month;
	
	if (arguments.length == 0)
		return 'Unable to determine the time of year!';
	if (!date || !(date instanceof Date) || isNaN(+date)) 
		throw new Error('ERROR');
	month = date.getMonth();
	if (1 < month && month <= 4)
		return "spring";
	if (4 < month && month <= 7)
		return "summer";
	if (7 < month && month <= 10)
		return "autumn";
	return "winter";
};
