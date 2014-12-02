var dojo = require('../src/dojo');

describe('dojoTest', function() {

	it('dojo existe et est un objet', function() {
		expect(dojo).toBeDefined();
		expect(typeof dojo).toEqual('object');
	});
});