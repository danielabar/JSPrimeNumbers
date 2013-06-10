describe("Prime Number Function", function() {
    
	it("There are 4 prime numbers less than or equal to 10", function() {
		var primes = PrimeApp.findPrimes(10);
        expect(primes.length).toEqual(4);
    });    	
	
});