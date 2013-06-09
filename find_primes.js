var PrimeApp = function () {

	var candidate = function(spec) {
		var that = {};		
		that.getValue = function() {
			return spec.value;
		};		
		that.getCrossedOut = function() {
			return spec.crossedOut;
		};		
		return that;
	};
    
    var init = function (upTo) {
       var candidates = [];
		for(var i=2; i<=upTo; i++) {
			candidates[i-2] = candidate({value: i, crossedOut: false});
		}
		return candidates;
    }
	
	var findIndexOfFirstNotCrossedOut = function(candidates, startLookingFrom) {
		for (var j=startLookingFrom; j<candidates.length; j++) {
			if (candidates[j].getCrossedOut() === false) {
				return j;
			}
		}
		return -1;
	}
	
	var crossOutMultiples = function(candidates, startingIndex, multipleValue) {
		var howManyCrossedOut = 0;
		for (var i=startingIndex; i<candidates.length; i++) {			
			if (candidates[i].getCrossedOut() === false && candidates[i].getValue() % multipleValue === 0) {				
				candidates[i] = candidate({value: candidates[i].getValue(), crossedOut: true});
				howManyCrossedOut = howManyCrossedOut + 1;
			}
		}
		return howManyCrossedOut;
	}
	
	var displayDebug = function(candidates) {
		for (var j=0; j<candidates.length; j++) {			
			console.log(j + ': ' + candidates[j].getValue() + ', ' + candidates[j].getCrossedOut());			
		}
	}
	
	var displayPretty = function(candidates) {
		var primes = [];
		for (var j=0; j<candidates.length; j++) {
			if (candidates[j].getCrossedOut() === false) {
				primes.push(candidates[j].getValue());				
			}
		}
		console.log(primes);
	}
	
	var findPrimes = function (upTo) {
		var potential = init(upTo)		
		var startingIndex = findIndexOfFirstNotCrossedOut(potential, 0);	
		var howManyCrossedOut = -1;		
		while(true) {
			howManyCrossedOut = crossOutMultiples(potential, startingIndex+1, potential[startingIndex].getValue());					
			if (howManyCrossedOut === 0) {
				break;
			}
			startingIndex = findIndexOfFirstNotCrossedOut(potential, startingIndex+1);						
			displayPretty(potential);
		}						
	}
	
    return {        
        findPrimes: findPrimes
    }
	
}();