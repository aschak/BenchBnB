var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench.js'),
    ApiUtil = require('../util/api_util.js');


var Map = React.createClass({

  _onChange: function () {
    var benches = BenchStore.all();
    var markers = this.markers;
    var map = this.map;
    window.map = map;

    benches.forEach(function (bench) {
      var pos = new google.maps.LatLng(bench.lat, bench.lng);
      this.markers.push(new google.maps.Marker({
        position: pos,
        map: map,
        title: "Basic Bench"
      }));
    }.bind(this));
    console.log(this.markers);
  },

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.markers = [];

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.idleListener();

    BenchStore.addListener(this._onChange);
  },

  deleteMarkers: function () {
    var bounds = this.map.getBounds();
    var deleted = [];

    this.markers.forEach(function (marker) {
      var lat = marker.position.lat();
      var lng = marker.position.lng();

      if (lat < bounds.getSouthWest().lat() || lat > bounds.getNorthEast().lat()
        || lng < bounds.getSouthWest().lng() || lng > bounds.getNorthEast().lat() ) {
          deleted.push(marker);
      }
    });

    deleted.forEach(function (deletedMarker) {
      deletedMarker.setMap(null);
    }.bind(this));
  },

  idleListener: function () {
    google.maps.event.addListener(this.map, 'idle', function(){
      var latMax = this.map.getBounds().getNorthEast().lat(),
          lngMax = this.map.getBounds().getNorthEast().lng(),
          latMin = this.map.getBounds().getSouthWest().lat(),
          lngMin = this.map.getBounds().getSouthWest().lng();

      var bounds = [latMax, lngMax, latMin, lngMin];

      this.deleteMarkers();
      ApiUtil.fetchBenches(bounds);
    }.bind(this));
  },

  render: function () {
    return (
      <div className="map" ref="map">

      </div>
    );
  }
});



module.exports = Map;
