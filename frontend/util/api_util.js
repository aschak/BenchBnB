var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: 'api/benches',
      type: 'GET',
      data: {bounds: bounds},
      success: function (benches) {
        ApiActions.receiveAllBenches(benches);
      }
    });
  }
};


// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
