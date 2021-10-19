const languages = ['ruby', 'typescript'];
describe('Mathc arrays', () => {
	it('basci usage', () => {
		expect([1, 2, 3, 4]).toContainEqual(4);
		expect(languages).toContainEqual('ruby');
		expect(languages).toContainEqual(languages[0]);
	});
});
