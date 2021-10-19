describe('Match regular expression', () => {
	// para regex
	it('basic', () => {
		expect('developer').toMatch(/\w+/);
		expect('(21)91234-5678').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/);
	});
});
