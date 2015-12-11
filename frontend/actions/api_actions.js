var AppDispatcher = require('../dispatcher/dispatcher.js'),
    BenchConstants = require('../constants/bench_constants.js');


ApiActions = {
  receiveAllBenches: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
}


module.exports = ApiActions; 
