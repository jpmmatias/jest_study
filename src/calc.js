export default class Calculator {
	constructor(options) {
		this.precision = options ? options.precision : null;
	}
	add(x, y) {
		if (!this.precision) return x + y;
		return parseFloat((x + y).toFixed(this.precision));
	}

	sub(x, y) {
		return x - y;
	}
}
