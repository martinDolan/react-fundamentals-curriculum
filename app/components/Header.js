var React = require('react');
var GetWeatherInput = require('./GetWeatherInput');

class Header extends React.Component {
    render() {
      return (
        <header>
          How's dat weather?
          <GetWeatherInput />
        </header>
      )
    }
  }

module.exports = Header;