class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static newCartesianPoint(x, y) {
		return new Point(x, y);
	}

	static newPolarPoint(rho, theta) {
		return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
	}

	// It can be implemented taking advantage of static factory methods depending on the project.

	// Keep in mind, there is a violation here to SOLID's Single Responsibility Principle
	// as there can be a seperate class for the factory which is responsible for instantiation of points.
}

module.exports = Point;

// let p1 = Point.newCartesianPoint(1, 2);
// let p2 = Point.newPolarPoint(3, Math.PI / 2);

// console.log(p1);
// console.log(p2);
