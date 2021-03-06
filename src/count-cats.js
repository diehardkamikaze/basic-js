const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	var result;
	var i;
	var j;
	var n;
	var n2;
	var ini;
	
	result = 0;
	i = 0;
	n = matrix.length;
	while (i < matrix.length)
	{
		j = 0;
		n2 = matrix[i].length;
		ini = matrix[i];
		while (j < n2)
		{
			if (ini[j] && ini[j][0] === '^' && ini[j][1] === '^') // matrix[i][j].length === 2 ??
				result++;
			j++;
		}
		i++;
	}
	return (result);
};
