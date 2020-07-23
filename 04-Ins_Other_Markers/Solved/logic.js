// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([38.9072, -77.0369], 13);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
L.marker([38.901920, -76.981247]).addTo(myMap);

// Create a circle and pass in some initial options
L.circle([38.901920, -76.981247], {
  color: "purple",
  fillColor: "purple",
  fillOpacity: 0.5,
  radius: 500
}).addTo(myMap);

// Create a Polygon and pass in some initial options
L.polygon([
  [38.8975669, -77.0299434],
  [38.8794076, -77.0251214],
  [38.8980695, -77.0322756]
], {
  color: "blue",
  fillColor: "blue",
  fillOpacity: 0.25
}).addTo(myMap);

// Coordinates for each point to be used in the polyline
var line = [
  [38.901920, -76.981247],
  [38.902830, -77.017680],
  [38.905300, -77.036090]
];

// Create a polyline using the line coordinates and pass in some initial options
L.polyline(line, {
  color: "red"
}).addTo(myMap);

// Create a rectangle and pass in some initial options
L.rectangle([
  [38.913354, -76.991751],
  [38.9001661, -76.9849655]
], {
  color: "black",
  weight: 3,
  stroke: true
}).addTo(myMap);
