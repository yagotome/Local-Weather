$(document).ready(function() {
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	    	var lat = position.coords.latitude;
	    	var lon = position.coords.longitude;
	    	var getReq = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=44db6a862fba0b067b1930da0d769e98";
			$.getJSON(getReq, function(result) {
				$("#place").html(result.name + ", " + result.sys.country);
				$("#temp").html(Math.round(result.main.temp-273.15) + " °C");
				var img = '<img src="http://openweathermap.org/img/w/' + result.weather[0].icon + '.png">';
				$("#img").html(img);
			});
	    });
	}
});

