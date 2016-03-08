var city = ['NYC', 'LA', 'SF', 'ATX', 'SYD'];

for (var i = 0; i < city.length; i++ ) {
	console.log(city[i]);
    $('#city-options').append('<option>' + city[i] + '</option>');
 }

/* use this
	$.append()
 	$.attr()
 	$.change
 	$.val()
 	if/else statements*/



$('#form').on('change', function(event){
	event.preventDefault();

 	var city = $('#city-options option:selected').val();
 	
   	if (city == "NYC" || city =="ny"|| city =="nyc" || city == "New York" || city == "New York City" || city == "new york city"){ // How do I do other options: ny, New york, etc?
      $('body').attr('class','nyc');
    } else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
       $('body').attr('class','sf');
    } else if (city == "LA" || city =="la" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
       $('body').attr('class','la');
    } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
       $('body').attr('class','austin');
    } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
       $('body').attr('class','sydney');
   }
});