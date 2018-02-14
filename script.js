//weather app

if ("geolocation" in navigator) {
	console.log("Loc!");
	navigator.geolocation.getCurrentPosition(function(position) {
		var myLat = position.coords.latitude;
		console.log(myLat);
		var myLong = position.coords.longitude;
		console.log(myLong);
	})
	var url = "api.openweathermap.org/data/2.5/weather?q=London&APPID=458a20ca05651bf40589ac03f26998aa";
	console.log(url);
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.send();
}