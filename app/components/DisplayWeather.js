var React = require('react');
var api = require('../utils/api');

class DisplayWeather extends React.Component {
    constructor(props) {
        super(); 
        this.state = {
            weather: null,
        }
    }
    componentDidMount() {
        api.fetchCurrentWeather('Greensboro')
            .then(function(city) {
                console.log(city);
            })
    }
    render() {
      return (
        <div>
            Display The Weather!   
        </div>
      )
    }
  }

module.exports = DisplayWeather;