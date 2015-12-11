ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: 'api/benches',
      type: 'GET',
      success: function (benches) {
        ApiActions.receiveAllBenches(benches)
      }
    });
  }
}



window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
