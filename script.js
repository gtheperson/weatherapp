//weather app

if ("geolocation" in navigator) {
	console.log("Loc!");
	navigator.geolocation.getCurrentPosition(function(position) {
		var myLat = position.coords.latitude;
		console.log(myLat);
		var myLong = position.coords.longitude;
		console.log(myLong);
	})
	var url = "https://api.darksky.net/forecast/e0caa22f12142e9be69a732f34ec4498/37.8267,-122.4233";
	console.log(url);
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.send();
}