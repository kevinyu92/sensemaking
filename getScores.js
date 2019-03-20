
var getScores = function(wordsFlat){

	// -----------------------------------
	//  YOUR CODE
	//  Count the word frequency
	//  Return object with word counts
	// -----------------------------------
	// var join = 	wordsFlat.join(' ')

		var score = wordsFlat.reduce(function(count, word) {
		  count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
			return count;
		  
		}, {});
		return score;

}


module.exports = getScores;