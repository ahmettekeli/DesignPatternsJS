// Singleton is a component which is instantiated once.

// Why/when singleton is useful?
// Some components only make sense to have one in the system.
// Database repository
// Object factory
// For example when the constructor call is expensive.
// To prevent anyone creating additional copies.

class Singleton {
	constructor() {
		const instance = this.constructor.instance;
		if (instance) {
			return instance;
		}
		this.constructor.instance = this;
	}
}

let singleton1 = new Singleton();
let singleton2 = new Singleton();
console.log("Are they identical? " + (singleton1 === singleton2 ? "yes" : "no"));
