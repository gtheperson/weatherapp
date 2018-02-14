//weather app

if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(function(position) {// get position
		// define the latitude and longitude from the browser position api
		var myLat = position.coords.latitude;
		console.log(myLat);
		var myLong = position.coords.longitude;
		console.log(myLong);

		// make an initial api request for the location details using the lat and long
		var url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=";
		var posUrl = url + myLat + "," + myLong;
		var request = new XMLHttpRequest();
		request.open("GET", posUrl, true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = JSON.parse(request.responseText);
				console.log(data);

				// set nearest city name and woeid (where on earth id)
				var myCity = data[0].title;
				console.log(myCity);
				document.getElementById("pos").innerHTML += myCity;
				var myWoeid = data[0].woeid;
				console.log(myWoeid);

				// make request for weather for this woeid,use new var names or it gets unhappy

				var urlWeather = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" + myWoeid + "/";
				var requestWeather = new XMLHttpRequest();
				requestWeather.open("GET", urlWeather, true);
				requestWeather.onload = function() {
					if (requestWeather.status >= 200 && requestWeather.status < 400) {
						var dataWeather = JSON.parse(requestWeather.responseText);

						// set todays weather
						var myWeather = dataWeather.consolidated_weather[0].weather_state_name;
						document.getElementById("weather").innerHTML += myWeather;
						var myTemp = dataWeather.consolidated_weather[0].the_temp;
						document.getElementById("temp").innerHTML += (myTemp.toFixed(2) + " 'C"); 
						var myWind = dataWeather.consolidated_weather[0].wind_speed;
						document.getElementById("wind").innerHTML += (myWind.toFixed(2) + " mph"); 

						console.log(myWeather, myTemp, myWind);
					}// block that parses json weather detais data on success
				} //block that tries to get json weather details
				requestWeather.send();//send request for weather details

			}// block that parses json weather location data on success
		} //block that tries to get json weather loc
		request.send();// send request for weather locations

		// get antipodes details
		var urlAnti = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=" + (0 - myLat) + "," + (myLong - 180);
		var requestAnti = new XMLHttpRequest();
		requestAnti.open("GET", urlAnti, true);
		requestAnti.onload = function() {
			if (requestAnti.status >= 200 && requestAnti.status < 400) {
				var dataAnti = JSON.parse(requestAnti.responseText);
				console.log(dataAnti);

				// set nearest city name and woeid (where on earth id)
				var antiCity = dataAnti[0].title;
				console.log(antiCity);
				document.getElementById("antipos").innerHTML += antiCity;
				var antiWoeid = dataAnti[0].woeid;
				console.log(antiWoeid);

				// make request for weather for this woeid,use new var names or it gets unhappy

				var urlWeatherAnti = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" + antiWoeid + "/";
				var requestWeatherAnti = new XMLHttpRequest();
				requestWeatherAnti.open("GET", urlWeatherAnti, true);
				requestWeatherAnti.onload = function() {
					if (requestWeatherAnti.status >= 200 && requestWeatherAnti.status < 400) {
						var dataWeatherAnti = JSON.parse(requestWeatherAnti.responseText);

						// set todays weather
						var antiWeather = dataWeatherAnti.consolidated_weather[0].weather_state_name;
						document.getElementById("antiweather").innerHTML += antiWeather;
						var antiTemp = dataWeatherAnti.consolidated_weather[0].the_temp;
						document.getElementById("antitemp").innerHTML += (antiTemp.toFixed(2) + " 'C"); 
						var antiWind = dataWeatherAnti.consolidated_weather[0].wind_speed;
						document.getElementById("antiwind").innerHTML += (antiWind.toFixed(2) + " mph"); 

						console.log(antiWeather, antiTemp, antiWind);
					}// block that parses json weather detais data on success
				} //block that tries to get json weather details
				requestWeatherAnti.send();//send request for weather details

			}// block that parses json weather location data on success
		} //block that tries to get json weather loc
		requestAnti.send();// send request for weather locations

	})// get coords
}// check if there is geoloc