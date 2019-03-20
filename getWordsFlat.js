
var getWordsFlat = function(words){

	// -----------------------------------
	//  YOUR CODE
	//  Flatten the 2D words array using reduce
	//  Return flat words array
	// -----------------------------------	
	return words.reduce((acc, current) => {
		return acc.concat(current);
	  }, []);
	

}


module.exports = getWordsFlat;