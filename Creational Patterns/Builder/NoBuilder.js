class Person {
	constructor(streenName, city, postalCode, company, position, annualSallary) {
		this.streetName = streenName;
		this.city = city;
		this.postalCode = postalCode;
		this.company = company;
		this.position = position;
		this.annualSallary = annualSallary;
	}
	toString() {
		return (
			`Person lives at ${this.streetName}, ${this.city}, ${this.postalCode}\n ` +
			`and works at ${this.company} as a ${this.position} earning ${this.annualSalary}`
		);
	}
}

let person = new Person("Wall Streen", "New York City", "10005", "AdColony", "Engineer", "123456");
console.log(person.toString());
