var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

function WeatherGrid(props) {
  console.log(props)
  return(
      <div>
        <h1>{props.main_forecast}</h1>
      </div>
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null
    }

  }
  componentWillMount() {
    this.getQuery();
  }
  getQuery() {
    api.fetchCurrentWeather(this.props.location.search.slice(1))
    .then(function(forecast) {
      var data = forecast.data.weather;
        this.setState(function () {
            return {
              forecast: data
            }
        });
    }.bind(this));
  }
  render() {
    
    if (this.state.forecast != null ) {
      const forecastobj = this.state.forecast[0];
      var {id, main, description} = this.state.forecast[0]
      console.log(id, main, description);
    }
;
    return (
      <div>
          <main className="forecast">
              <h1>Forecast!!</h1>
              <WeatherGrid main_forecast={main} />
              {/* {JSON.stringify(this.state.forecast)}  */}
          </main>
      </div>
    )
  }
}

module.exports = Home;