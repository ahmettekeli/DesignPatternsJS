class Address {
	constructor(streetAddress, city, country) {
		this.streetAddress = streetAddress;
		this.city = city;
		this.country = country;
	}

	deepCopy() {
		return new Address(this.streetAddress, this.city, this.country);
	}

	toString() {
		return `Address: ${this.streetAddress} , ${this.city}, ${this.country}`;
	}
}

class Person {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}

	deepCopy() {
		return new Person(this.name, this.address.deepCopy());
	}

	toString() {
		return `${this.name} lives in ${this.address}`;
	}
}

let john = new Person("John", new Address("123 Main St", "Istanbul", "Turkey"));

//Let's consider john as our prototype for additional people to instantiate who live in the same neighborhood
// instead of instantiating a brand new object, copying john should be a better idea.

// *** Example 1 ***
let jane = john;
jane.name = "Jane";
jane.address.streetAddress = "234 Taksim Square";

console.log(john.toString()); // Jane lives in Address: 234 Taksim Square , Istanbul, Turkey
console.log(jane.toString()); // Jane lives in Address: 234 Taksim Square , Istanbul, Turkey

//john holds an object reference and assigning john to jane makes jane hold the same object reference then jane overrides the object and logging the same object.
// *** Example 1 ***

// *** Example 2 ***

//We can implement deepCopy function to each class to create new instances from them.

let jane = john.deepCopy();
jane.name = "Jane";
jane.address.streetAddress = "234 Taksim Square";

console.log(john.toString()); // John lives in Address: 123 Main St , Istanbul, Turkey
console.log(jane.toString()); // Jane lives in Address: 234 Taksim Square , Istanbul, Turkey

// *** Example 2 ***

// john is an effective prototype that can be copied.

/* 
    !!!! There is a downside to this approach: it is required to implement deepCopy function to each class property. 
        If the class has a class property of a class property ... it gets complicated to implement deepCopy to each class and keep track of them. 
*/
