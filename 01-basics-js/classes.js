// Class expression
const Rectangle = class {};

//Classes declared does not have hoisting
//console.log(Square);

// Class declaration
class Square {}

console.log(new Rectangle(), new Triangle());

//Clases constructors need always new
//console.log(new Square());

//class function
function Triangle() {}

class User {
	//# indicates that is private variable is necesary to be declare
	#comer;
	constructor(name = 'default', comer = false) {
		this.name = name;
		this.#comer = false;
	}
	static comer() {
		//Static methods can not acces to private variables
		//console.log(this.#comer);
		console.log('Static method');
	}
}

User.comer();

console.log(new User());
