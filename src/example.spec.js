import Calculator from './calc';
describe('Adittion', () => {
	let calc = null;
	beforeEach(() => {
		const options = {
			precision: 2,
		};
		calc = new Calculator(options);
	});
	it('add two positive numbers', () => {
		expect(calc.add(1.22, 1.333)).toEqual(2.55);
	});

	it('add two negative numbers', () => {
		expect(calc.add(-1.22, -1.333)).toEqual(-2.55);
	});
});
