var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
// class GetWeatherInput extends React.Component {}

class GetWeatherInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            forecast: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var value = event.target.value;
        //console.log('handle change fired');
        this.setState(function() {
            return {
                city: value
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        api.fetchCurrentWeather(this.state.city)
        .then(function(forecast) {
            this.setState(function () {
                return {
                  forecast: forecast
                }
              });
            }.bind(this));
            console.log(this.state.forecast);
    }
    render() {
    //var match = this.props.match;
    //aconsole.log(this.props.match);
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    id='city'
                    placeholder='Greensboro, NC'
                    type='text'
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                <Link
                className='button'
                to={{pathname: '/forecast',
                    search: this.state.city
                    }}>
                    <button
                        className='button' 
                        type='submit'>
                            Get Weather
                    </button>
                </Link>
                
                {JSON.stringify(this.state.forecast, null, 2)}
            </form>
              
        </div>
      )
    }
  }

  GetWeatherInput.propTypes = {
    // id: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    // onSubmit: PropTypes.func.isRequired,
  }

  GetWeatherInput.defaultProps = {
    label: 'Greensboro',
  }

module.exports = GetWeatherInput;