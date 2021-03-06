const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(whichMashine = true) {
	this.crypted = [];
	if (whichMashine)
      this.reverse = false;
	else
	  this.reverse = true;
  }
  encrypt(string, key) {
	var i;
	var j;
	  
	if (string == undefined || key == undefined) 
      throw "Error";
	i = 0;
	j = 0;
	this.crypted = new Array(string.length);
	while (i < string.length)
	{
		if (65 <= string[i].toUpperCase().charCodeAt(0) && string[i].toUpperCase().charCodeAt(0) <= 90) {
			var tmp = ((string[i].toUpperCase().charCodeAt(0) + (key[j % key.length].toUpperCase().charCodeAt(0) - 65)));
			this.crypted[i] = String.fromCharCode(tmp > 90 ? 64 + tmp % 90 : tmp);
			j++;
			}
		else 
			this.crypted[i] = string[i];
		i++;
	}
	if (this.reverse)
		this.crypted.reverse();
	return this.crypted.join('');
  }    
  decrypt(string, key) {
	var i;
	var j;
	  
	if (string == undefined || key == undefined) 
      throw "Error";
	i = 0;
	j = 0;
	this.crypted = new Array(string.length);
	while (i < string.length)
	{
		if (65 <= string[i].toUpperCase().charCodeAt(0) && string[i].toUpperCase().charCodeAt(0) <= 90) {
			var tmp = ((string[i].toUpperCase().charCodeAt(0) - (key[j % key.length].toUpperCase().charCodeAt(0) - 65)));
			this.crypted[i] = String.fromCharCode(tmp < 65 ? 91 - (65 - tmp) : tmp);
			j++;
			}
		else 
			this.crypted[i] = string[i];
		i++;
	}
	if (this.reverse)
		this.crypted.reverse();
	return this.crypted.join('');
  }  
}

module.exports = VigenereCipheringMachine;
