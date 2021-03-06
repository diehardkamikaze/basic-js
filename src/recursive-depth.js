const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
	  var i;
	  var maxdepth;
	  var depth;
	  
	  i = 0;
	  maxdepth = 1;
	  while(i < array.length)
	  {
		  if (Array.isArray(array[i]))
		  {
			  depth = 1 + this.calculateDepth(array[i]);
			  if (depth > maxdepth)
					maxdepth = depth;
		  }
		  i++;
	  }
	  return (maxdepth);
  }
};