class Tail {
	constructor(tailLength) {
		this.tailLength = tailLength;
	}
	toString() {
		return `My tail is ${this.tailLength}cms long.`;
	}
}

class Torso {
	constructor(color) {
		this.color = color;
	}
	toString() {
		return `My Torso is ${this.color}`;
	}
}

class Head {
	constructor(snouthLength) {
		this.snouthLength = snouthLength;
	}

	toString() {
		return `My snouth is ${this.snouthLength}cms long`;
	}
}

class TailFactory {
	static instantiate(tailLength) {
		console.log("Creating a tail with the length of " + tailLength);
		return new Tail(tailLength);
	}
}

class TorsoFactory {
	static instantiate(color) {
		console.log("Creating a torso with the color of:", color);
		return new Torso(color);
	}
}

class HeadFactory {
	static instantiate(snouthLength) {
		console.log("Creating a head with a snouth " + snouthLength + " long");
		return new Head(snouthLength);
	}
}

const ReptileParts = Object.freeze({
	TAIL: TailFactory,
	TORSO: TorsoFactory,
	HEAD: HeadFactory,
});

class ReptileFactory {
	constructor() {
		this.factories = {};
		for (let prop in ReptileParts) {
			this.factories[prop] = ReptileParts[prop];
		}
	}
	report(part, prop, callback) {
		let reptilePart = this.factories[part].instantiate(prop);
		callback(reptilePart);
	}
}

let rf = new ReptileFactory();
rf.report("HEAD", "30", (param) => {
	param.toString();
});
