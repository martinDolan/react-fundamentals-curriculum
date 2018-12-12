var React = require('react');
var GetWeatherInput = require('./GetWeatherInput');
var DisplayWeather = require('./DisplayWeather');

class Home extends React.Component {
    render() {
      return (
        <div>
            <main className="home">
                <h1>Enter a City and State</h1>
                <GetWeatherInput />
            </main>
        </div>
      )
    }
  }

module.exports = Home;