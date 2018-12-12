var React = require('react');
var Home = require('./Home');
var Header = require('./Header');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
    render() {
      return (
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/forecast' component={Forecast} />
            </Switch>
          </div>

        </Router>
      )
    }
  }

module.exports = App;