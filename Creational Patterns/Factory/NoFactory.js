const Coordinatesystem = Object.freeze({
	CARTESIAN: "cartesian",
	POLAR: "polar",
});

class Point {
	constructor(a, b, cs = Coordinatesystem.CARTESIAN) {
		switch (cs) {
			case Coordinatesystem.CARTESIAN:
				this.x = a;
				this.y = b;
				break;
			case Coordinatesystem.POLAR:
				this.x = a * Math.cos(b);
				this.y = a * Math.sin(b);
				break;
		}
	}

	//Problems here are:
	// 1 - Constructor arguments a , b are not self explanatory.
	// 2 - We'd have to modify Point class if there is another coordinate system needs to be added. (Violation to SOLID's Open Close Princible)
}

let p1 = new Point(1, 2, Coordinatesystem.CARTESIAN);
let p2 = new Point(3, Math.PI / 2, Coordinatesystem.POLAR);

console.log(p1);
console.log(p2);
