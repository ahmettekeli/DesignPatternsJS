class PointFactory {
	static newCartesianPoint(x, y) {
		return new Point(x, y);
	}

	static newPolarPoint(rho, theta) {
		return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
	}
}

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	//Depending on the project, to suggest user to use factory instead of using point constructor directly. (See Example 2)
	//!Keep in mind: This breaks the Open Closed Principle and adds coupling.
	static get factory() {
		return PointFactory;
	}
}

//Example 1
let p1 = PointFactory.newCartesianPoint(1, 2);
let p2 = PointFactory.newPolarPoint(3, Math.PI / 2);

console.log(p1);
console.log(p2);

//Example 2
let p3 = Point.factory.newCartesianPoint(4, 5);
let p4 = Point.factory.newPolarPoint(6, Math.PI);

console.log(p3);
console.log(p4);
