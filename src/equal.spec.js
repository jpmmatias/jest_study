describe('equality', () => {
	it('basic usage - toEqual', () => {
		expect(1 + 1).toEqual(2);
		expect(1 + 1).not.toEqual(3);
		expect('ruby').toEqual('ruby');
		expect({ language: 'ruby' }).toEqual({ language: 'ruby' });
	});

	// to Be compara objetos de memoria, por isso na linha 14 são considerados objetos diferentes. dando erro no teste
	it('basic usage - toBe', () => {
		expect(1 + 1).toBe(2);
		expect('ruby').toBe('ruby');
		//expect({ language: 'ruby' }).toBe({ language: 'ruby' }); -> Vai dar erro
		const obj = { language: 'ruby' };
		expect(obj).toBe(obj);
	});
});
