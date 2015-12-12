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
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
    var benches = this.state.benches
    return (
      <ul>
        {
          benches.map(function (bench) {
            return <li>
              Bench Description: {bench.description}
              <br/>
              <br/>
              Lat: {bench.lat}
              <br/>
              Long: {bench.lng}
              <br/>
              <br/>
            </li>
          })
        }
      </ul>
    )
  }
})



module.exports = Index;
