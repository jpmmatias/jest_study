import Calculator from './calc';
describe('Calculator', () => {
	it('calculate sum of two numbers', () => {
		const calc = new Calculator();
		expect(calc.add(10, 10)).toEqual(20);
	});
	it('calculate sub of two numbers', () => {
		const calc = new Calculator();
		expect(calc.sub(10, 10)).toEqual(0);
	});
});
