describe('dojo', function() {
	var dojo;
	beforeEach(function() {
		dojo = window.Dojo;
	});
	
	describe('returnTrue', function() {
		it('retourne true', function() {
			var expectedTrue = (new dojo.Preco()).returnTrue();
			expect(expectedTrue).toBeTruthy();
		});
	});
});