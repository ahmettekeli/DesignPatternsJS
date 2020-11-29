class Drink {
	//consider this as an abstract member of the base class Drink
	consume() {}
}

class Beer extends Drink {
	consume() {
		console.log("This beer is great with some snacks.");
	}
}

class Coke extends Drink {
	consume() {
		console.log("This coke is so cold.");
	}
}

class DrinkFactory {
	//consider this as an abstract member.
	prepare(amount) {}
}

class BeerFactory extends DrinkFactory {
	prepare(amount) {
		console.log(`Pouring ${amount}ml of beer to the cold glass`);
		return new Beer();
	}
}

class CokeFactory extends DrinkFactory {
	prepare(amount) {
		console.log(`Adding some ice to the glass then pouring ${amount}ml of coke to the glass`);
		return new Coke();
	}
}

//Scenario 1
class DrinkMachine {
	makeDrink(type) {
		switch (type) {
			case "beer":
				return new BeerFactory().prepare(500);
				break;
			case "coke":
				return new CokeFactory().prepare(330);
				break;
			default:
				throw new Error("Some error message.");
		}
	}
	//This setup does not take advantage of Abstrac Factory's abilities. The approach above is basically using the functions manually.
	// And it's a violation to Open Closed Princible
	// because some modifications should be done in this class whenever there is another Drink factory is needed.
}

//Example 1
// let machine = new DrinkMachine();
// let beer = machine.makeDrink("beer");
// beer.consume();

//Scenario 2
const AvailableDrink = Object.freeze({
	beer: BeerFactory,
	coke: CokeFactory,
});

class BetterDrinkMachine {
	constructor() {
		this.factories = {};
		for (let drink in AvailableDrink) {
			this.factories[drink] = new AvailableDrink[drink]();
		}
	}

	makeDrink(drinkType, amount, callback) {
		let drink = this.factories[drinkType].prepare(amount);
		callback(drink);
	}
}

//Example 2
let betterMachine = new BetterDrinkMachine();
betterMachine.makeDrink("coke", 450, (drink) => {
	drink.consume();
});
