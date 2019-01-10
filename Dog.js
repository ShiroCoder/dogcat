function Dog() {
	this.name = name;
	this.stomach = [];
	console.log("Goof");
}
Dog.prototype.eat = function(bone) {
	this.stomach.push(bone);
};