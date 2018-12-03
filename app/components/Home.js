var React = require('react');
var Header = require('./Header');

class Home extends React.Component {
    render() {
      return (
        <div>
            <Header />
            <main>
                <form>
                <label>Enter a City and State</label>
                    <input
                        id='city'
                        placeholder='Greensboro, NC'
                        type='text'
                    />
                    <button
                        className='button'
                        type='submit'>
                            Submit
                    </button>
                </form>    
            </main>
        </div>
      )
    }
  }

module.exports = Home;