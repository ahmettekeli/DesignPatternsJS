class Person {
	constructor() {
		//address
		this.streetName = "";
		this.postalCode = "";
		this.city = "";

		//employment
		this.companyName = "";
		this.position = "";
		this.annualSalary = 0;
	}

	toString() {
		return (
			`Person lives at ${this.streetName}, ${this.city}, ${this.postalCode}\n ` +
			`and works at ${this.companyName} as a ${this.position} earning ${this.annualSalary}`
		);
	}
}

class PersonBuilder {
	constructor(person = new Person()) {
		this.person = person;
	}

	get lives() {
		return new PersonAddressBuilder(this.person);
	}

	get works() {
		return new PersonJobBuilder(this.person);
	}

	build() {
		return this.person;
	}
}

class PersonJobBuilder extends PersonBuilder {
	constructor(person) {
		super(person);
	}

	at(companyName) {
		this.person.companyName = companyName;
		return this;
	}

	as(position) {
		this.person.position = position;
		return this;
	}
	earning(annualSallary) {
		this.person.annualSalary = annualSallary;
		return this;
	}
}

class PersonAddressBuilder extends PersonBuilder {
	constructor(person) {
		super(person);
	}

	at(streetName) {
		this.person.streetName = streetName;
		return this;
	}

	in(cityName) {
		this.person.city = cityName;
		return this;
	}

	withPostalCode(postalCode) {
		this.person.postalCode = postalCode;
		return this;
	}
}

let pb = new PersonAddressBuilder();
let person = pb.lives
	.at("Wall Street")
	.in("New York City")
	.withPostalCode("10005")
	.works.at("AdColony")
	.as("Engineer")
	.earning("123456")
	.build();

console.log(person.toString());
