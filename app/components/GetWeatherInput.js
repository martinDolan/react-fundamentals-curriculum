var React = require('react');
var PropTypes = require('prop-types');

// class GetWeatherInput extends React.Component {}

class GetWeatherInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
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
        console.log('handle submit fired');
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.city
        )
    }
    render() {
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
                <button
                    className='button'
                    type='submit'>
                        Submit
                </button>
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