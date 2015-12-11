var Store = require('flux/utils').Store
var AppDispatcher = require('../dispatcher/dispatcher.js')

var BenchStore = new Store(AppDispatcher)

var _benches = [];

BenchStore.all = function () {
  return _benches.slice(0);
}

window.BenchStore = BenchStore;

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ACTION:

      break;

  }
}





module.exports = BenchStore;
