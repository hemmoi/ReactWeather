var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=53f19fec1c75d894124391d1e3ed14ab&units=metric';

// 53f19fec1c75d894124391d1e3ed14ab

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    debugger;
    return axios.get(requestUrl).then(
      function(res){
        debugger;
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      },
      function(res){
        debugger;
        throw new Error('Unable to fetch data for that location.');
//        throw new Error(res);
      }
    );
  }
}
