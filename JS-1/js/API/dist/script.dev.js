"use strict";

var neighborhoodCenter = {
  lat: 59.448442,
  lng: 18.068683
};
var OPENCAGE_KEY = "31d8ce0c88364a2989b2b4e8199fc735";
var places = [{
  name: "Täby park hundlek",
  address: "Park in Täby, Sweden",
  category: "park"
}, {
  name: "Grazie",
  address: "Pizza place in Täby centrum, Sweden",
  category: "restaurant"
}, {
  name: "Medley Täby Simhall",
  address: "Swimming pool in Täby, Sweden",
  category: "landmark"
}];
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: neighborhoodCenter,
    zoom: 13
  });
  loadPlaces();
}

function fetchLocation(place) {
  var url = "https://api.opencagedata.com/geocode/v1/json?q=".concat(encodeURIComponent(place.address), "&key=").concat(OPENCAGE_KEY);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.results.length > 0) {
      var location = data.results[0].geometry;
      addMarker(place, location);
    }
  })["catch"](function (error) {
    return console.error("Geocoding error:", error);
  });
}