var axios = require('axios');

var key = "";


function currentWeather (city) {
    var current = axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + key);
    return current;
}

function fiveDayForecast (city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/?q=' + city + '&type=accurate&APPID=' + key + '&cnt=5');
}

module.exports = {
    fetchCurrentWeather: function(city) {
        return currentWeather(city);
    },
    fetchfiveDayForecast: function(city) {
        return fiveDayForecast(city);
    },
}
