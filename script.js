//weather app

if ("geolocation" in navigator) {
	console.log("Loc!");
	navigator.geolocation.getCurrentPosition(function(position) {
		var myLat = position.coords.latitude;
		console.log(myLat);
		var myLong = position.coords.longitude;
		console.log(myLong);
	})
	var url = "https://www.metaweather.com/api/location/search/?query=london";
	console.log(url);
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.send();
}