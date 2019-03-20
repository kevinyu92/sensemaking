
var getTitles = function(mitcourses){

	// -----------------------------------
	//  Get the course titles
	//  Return array of course titles

	var str = mitcourses
	var result = str.match(/<h3>(.*?)<\/h3>/g).map(function(str){
	return str.replace(/<\/?h3>/g,'');
 	});

	var titles = []
	result.forEach(el => {
		var replace = el.replace('<br><img alt=______ src=/icns/hr.gif>', '');
		titles.push(replace)

	});
	return titles

	
}


module.exports = getTitles;