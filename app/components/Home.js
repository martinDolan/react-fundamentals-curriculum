var React = require('react');
var Header = require('./Header');
var GetWeatherInput = require('./GetWeatherInput');
var DisplayWeather = require('./DisplayWeather');

class Home extends React.Component {
    render() {
      return (
        <div>
            <Header />
            <main>
                <h1>Enter a City and State</h1>
                <GetWeatherInput />
                <DisplayWeather />
            </main>
        </div>
      )
    }
  }

module.exports = Home;