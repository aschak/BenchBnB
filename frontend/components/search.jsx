var React = require('react'),
    Map = require('./map.jsx'),
    Index = require('./index.jsx');


var Search = React.createClass({
  render: function () {
    return(
      <div>
        <Map/>
        <Index/>
      </div>
    );
  }
});


module.exports = Search;
