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
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Basic Bench"
      });
      markers.push(marker);
    });
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

  deleteMarkers: function (bounds) {
    var deleted = this.markers.filter(function (marker) {
      var lat = marker.position.lat();
      var lng = marker.position.lng();
      return (
        lat < bounds['southWest']['lat'] || lat > bounds['northEast']['lat']
        || lng < bounds['southWest']['lng'] || lng > bounds['northEast']['lat']
      );
    });

    deleted.forEach(function (deletedMarker) {
      this.markers.remove(deletedMarker);
    }).bind(this);
  },

  idleListener: function () {
    google.maps.event.addListener(this.map, 'idle', function () {
      var bounds = this.map.getBounds();

      var southWest = {
        "lat": bounds.getSouthWest().lat,
        "lng": bounds.getSouthWest().lng
      };

      var northEast = {
        "lat": bounds.getNortEast().lat,
        "lng": bounds.getNorthEast().lng
      };

      this.deleteMarkers({
        "southWest": southWest,
        "northEast": northEast
      });

      bounds = "?bounds[northEast][lat]=" +
              northEast["lat"] +
              "&bounds[northEast][lng]=" +
              northEast["lng"] +
              "&bounds[southWest[lat]=" +
              southWest["lat"] +
              "&bounds[southWest][lng]=" +
              southWest["lng"];



    });
  },

  render: function () {
    return (
      <div className="map" ref="map">

      </div>
    );
  }
});



module.exports = Map;
