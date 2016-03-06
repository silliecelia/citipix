var submitBtn = $('#submit-btn');

$( "form" ).on( "submit", function(event) {
	event.preventDefault();
	var input = $('#city-type').val().toLowerCase();
	$("body").removeClass();

	if (input === "new york city" || input === "nyc" || input === "new york") {
		$("body").addClass("nyc");
	} else if (input === "san francisco" || input === "sf" || input === "bay area") {
		$("body").addClass("sf");
	} else if (input === "los angeles" || input === "la" || input === "lax") {
		$("body").addClass("la");
	} else if (input === "austin" || input === "atx") {
		$("body").addClass("austin");
	} else if (input === "sydney" || input === "syd") {
		$("body").addClass("sydney");
	}
});

var cities = ['NYC', 'SF', "LA", "ATX", "SYD"];
// console.log( cities[0] );
// console.log( cities[1] );
// console.log( cities[2] );

for (var i = 0; i < cities.length; i++) {
	console.log(cities[i]);
	// <option val="cityname">cityname</option>
	$( '#city-options' ).append( '<option>' + cities[i] + '</option>');

}


// function add(a,b){
// 	return a + b;
// }

// console.log( add(1,2) );