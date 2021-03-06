const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	var i;
	var arr;
	var result;
	var tmp;
	
	if (!members)
		return (false);
	i = 0;
	result = "";
	arr = new Array(91).fill(0);
	while (i < members.length)
	{
		if (members[i] && members[i][0] && members[i].trim)
		{
			tmp = members[i].trim().charCodeAt(0);
			if (tmp > 90)
				tmp = tmp - 32;
			arr[tmp]++;
		}
		i++;
	}
	i = 65;
	while (i <= 90)
	{
		if (arr[i])
			result += String.fromCharCode(i).repeat(arr[i]);
		i++;
	}
	return (result ? result : false);
};
