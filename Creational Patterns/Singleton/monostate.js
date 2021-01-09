class MonostateManager {
	get name() {
		return MonostateManager._name;
	}
	set name(value) {
		MonostateManager._name = value;
	}

	get age() {
		return MonostateManager._age;
	}

	set age(value) {
		MonostateManager._age = value;
	}

	toString() {
		return `Manager is ${this.name} and age ${this.age} years old.`;
	}
}

MonostateManager._age = undefined;
MonostateManager._name = undefined;

let mgr1 = new MonostateManager();
mgr1.name = "John Doe";
mgr1.age = 30;

console.log(mgr1.toString());

let mgr2 = new MonostateManager();
mgr2.name = "Jane Doe";
mgr2.age = 40;

console.log(mgr2.toString());
console.log("---------------");

console.log(mgr1.toString());
console.log(mgr2.toString());

//mgr2 overwrites MonostateManager class instance singe mgr1 and mgr2 both operate on the class instance.
