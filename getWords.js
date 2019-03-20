
var getWords = function(titles){

	// -----------------------------------
	//  YOUR CODE
	//  Filter out punctuation/numbers
	//  Return words array
	// -----------------------------------	
	words = []
	titles.forEach(el => {
		var replace = el.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g, '');
		var replace = replace.toLowerCase();
		var replace = replace.trim()
		var replace = replace.split(" ");
		words.push(replace)


	
	})

	return words
}

module.exports = getWords;