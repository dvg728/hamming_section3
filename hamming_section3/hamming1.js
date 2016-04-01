var compute;

// this function computes the Hamming
// distance etween two strands of
// nucleotides.
compute = function(strand1, strand2) {
	
	//
	if (s1.length !== s2.length) {
		//then throw an error
		throw new Error('DNA strands must be of equal lenght.');
	}

	// declare our output variable
	// default is identical strands,
	//output the hamming distance
	var distance = 0;

	// cd compute the hamming distance
	// iterate over every pair of letters in 
	// the two strands
	for (var i = 0; i < s1.length; i += 1) {
		// if the i'th character in strand 1 is NOT
		// equal to the i'th character in strand 2
		if (s1.charAt(i) !== s2.charAt(i)) {
			// add 1 to the distance
			dist += 1
		}
	}


	// calculate the actual Hamming distance
	return dist;
	
};

module.exports = {
	compute: compute
}