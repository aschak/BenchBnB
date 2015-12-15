var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    BenchStore = require('./stores/bench.js'),
    ApiUtil = require('./util/api_util.js');

var Search = require('./components/search.jsx');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header><h1> Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Search}/>
  </Route>
);


document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
