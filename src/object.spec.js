const users = {
	name: 'João',
	email: 'email@gmail.com',
};
describe('Match object', () => {
	it('basic usage', () => {
		// pra saber se esta definido em um objeto
		expect(users.name).toBeDefined();
		// pra saber se não esta definido em um objeto
		expect(users.age).not.toBeDefined();
	});
});
