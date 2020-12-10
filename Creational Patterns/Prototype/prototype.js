//The Prototype pattern is particularly useful when the construction of a new object directly is inefficient and expensive.

//It is useful when instantiating an object goes through multiple long and performance reducing processes

let person = {
	name: "John Doe",
	greet: () => {
		console.log("Hello everyone!");
	},
	eat: () => {
		console.log("This meal is really delicious.");
	},
	sleep: () => {
		console.log("Good night!");
	},
};

//person is aprototype for anotherPerson.
let anotherPerson = Object.create(person);
anotherPerson.name = "Jane Doe";
console.log(anotherPerson.name);
anotherPerson.eat();
