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
