const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	var len;
	var i;
	var result;
	
	if (!Array.isArray(arr))
		throw "Error";
	i = 0;
	result = [];
	len = arr.length;
	while (i < len)
	{
		if (arr[i].length)
		{
			if (arr[i][3] == 'i')
			{
				if (arr[i][10] == 'n') // --discard--next
				{
					i++;
				}
				else if (result.length && !(arr[i - 2] && arr[i - 2][3] == 'i' && arr[i - 2][10] == 'n'))// --discard--prev
				{
					result.length--;
				}
			}
			else if(arr[i][3] == 'o')
			{
				if (arr[i][9] == 'n') // --double--next
				{
					arr[i + 1] != undefined ? result.push(arr[i + 1]) : '';
				}
				else if (result.length && !(arr[i - 2] && arr[i - 2][3] == 'i' && arr[i - 2][10] == 'n')) // --double--prev
				{
					result.push(arr[i - 1]);
				}
			}
			else
				result.push(arr[i]);
		}
		else
			result.push(arr[i]);
		i++;
	}
	return (result);
};
