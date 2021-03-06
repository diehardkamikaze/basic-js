const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
	return this.links.length;
  },
  addLink(value = '') {
	if(value === null)
		value = 'null';
	this.links.push(value);
	return this;
  },
  removeLink(position) {
	if (typeof position !== "number" || position % 1 !== 0 || position < 0 || position >= this.links.length)
	{
		this.links.length = 0;
		throw "Error";
	}
	var remainder;
	
	remainder = this.links.length - position;
	position--;
	while (remainder--)
		if(this.links[position + 1] != undefined)
			this.links[position] = this.links[position++ + 1];
	this.links.length--;
	return this;
  },
  reverseChain() {
	this.links.reverse();
	return this;
  },
  finishChain() {
	var copy = Array.from(this.links);
	this.links.length = 0;
    return "( " + copy.join(' )~~( ') + " )";
  }
};

module.exports = chainMaker;
