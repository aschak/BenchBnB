var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('./stores/bench.js'),
    ApiUtil = require('./util/api_util.js');
    
var Search = require('./components/search.jsx');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app.jsx');

window.BenchStore = BenchStore;



var routes = (
  <Route path='/' component={App}>

  </Route>
);


document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('#content');
  ReactDOM.render(
    <Search/>,
    document.getElementById('content')
  );
});
