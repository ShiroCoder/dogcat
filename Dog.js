function Dog() {
	this.name = name;
	this.stomach = [];
	this.weight = weight;
	
	console.log("Goof");
}
Dog.prototype.eat = function(bone) {
	this.stomach.push(bone);
};

module.exports = Dog;