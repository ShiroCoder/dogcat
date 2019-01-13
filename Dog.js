var chalk = require('chalk');

function Dog(name,weight) {
	this.name = name;
	this.stomach = [];
	this.weight = weight;
}
Dog.prototype.goof = function() {
	console.log("Goof");
	// console.log("My name is "+chalk.blue(this.name) +"and i'm " +this.weight+" kg");
};

module.exports = Dog; 