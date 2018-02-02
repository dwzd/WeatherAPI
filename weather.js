var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/b0f63f9cfbfc2290/conditions/q/CA/San_Francisco.json", false);
weather.send(null);

var r = JSON.parse(weather.response);
var weather = "Current location: " + r.current_observation.display_location.full + "<br/>";

var today = r.current_observation.weather + "<br/>";
var temp = r.current_observation.temperature_string + "<br/>";
var wind = r.current_observation.wind_string + "<br/>";

document.getElementById("weather").innerHTML = weather;

document.getElementById("today").innerHTML = today;
document.getElementById("temp").innerHTML = temp;
document.getElementById("wind").innerHTML = wind;


