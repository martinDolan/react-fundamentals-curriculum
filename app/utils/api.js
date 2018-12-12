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

    // fetchWeather: function(city) {
    //     var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=76b32d4d433089753e76847425f8fd76');
    
    //     return axios.get(encodedURI)
    //     .then(function(response) {
    //         return response.data;
    //     });
    // }
}

//Current Weather
//http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

//5 Day Forecast
//http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

//76b32d4d433089753e76847425f8fd76

//&APPID=76b32d4d433089753e76847425f8fd76

//http://api.openweathermap.org/data/2.5/weather?q=GREENSBORO&type=accurate&APPID=76b32d4d433089753e76847425f8fd76