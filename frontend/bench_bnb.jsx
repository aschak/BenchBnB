var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app.jsx');


var routes = (
  <Route path='/' component={App}>

  </Route>
)


document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('#content');
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('content')
  )
})
