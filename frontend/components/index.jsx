var React = require('react'),
    BenchStore = require('./../stores/bench.js'),
    ApiUtil = require('./../util/api_util.js');

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all()};
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
    // ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
    var benches = this.state.benches;
    return (
      <ul>
        {
          benches.map(function (bench, idx) {
            return <li key={idx}>
              Bench Description: {bench.description}
              <br/>
              <br/>
              Coordinates: {bench.lat}, {bench.lng}
            </li>;
          })
        }
      </ul>
    );
  }
});



module.exports = Index;
