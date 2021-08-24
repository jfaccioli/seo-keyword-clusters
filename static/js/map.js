// // Store our API endpoint inside queryUrl
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// // Perform a GET request to the query URL
// d3.json(queryUrl).then(function(data) {


//   // Create a function setting a colour depending on the magnitude (red to green)
//   function coulour(magnitude){
//     switch (true) {
//       case (magnitude > 5):
//           return "#FF0000";
//       case (magnitude > 4):
//           return "#FF8C00";          
//       case (magnitude > 3):
//           return "#FFC100";
//       case (magnitude > 2):
//           return "#FFF600";          
//       case (magnitude > 1):
//           return "#D4FF00";
//       default:
//           return "#00FF00";
//     }}


//   // Create a function for the circle markers
//   function circle(feature) {
//     return {
//         radius: feature.properties.mag * 5,
//         weight: 0.2,
//         opacity: 1,
//         color: 'black',
//         fillColor: coulour(feature.properties.mag),
//         fillOpacity: 0.7,
//         };
//       };


//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   function onEachFeature(feature, layer) {
//         layer.bindPopup("<h3>" + feature.properties.place +
//         "</h3><hr><p>" + new Date(feature.properties.time) + "</p><hr><h4>Magnitude: " + feature.properties.mag + "</h4>");
//       };


//   // Create a GeoJSON layer for the markers
//   L.geoJSON(data.features, {
//         onEachFeature: onEachFeature,
//         pointToLayer: function (feature, latlng) { return L.circleMarker(latlng, circle(feature));
//       }
//       }).addTo(myMap);
 

//   // Define a light layer 
//   L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//         maxZoom: 18,
//         id: "light-v10",
//         accessToken: API_KEY
//       }).addTo(myMap);


//   // Set up the legend
//   var legend = L.control({position: "bottomright"});
       
//   legend.onAdd = function() {
//     var div = L.DomUtil.create('div', 'legend');
//     colors = ["#00FF00", "#D4FF00", "#FFF600", "#FFC100", "#FF8C00", "#FF0000"],
//     magnitude_range = ['0 - 1', '1 - 2', '2 - 3', '3 - 4', '4 - 5',  '5+']
    
//     for (var i = 0; i < magnitude_range.length; i++) {
//         div.innerHTML += '<i class="legend_map" style="background:' + colors[i] + '"></i>' + magnitude_range[i] + "<br>";
//     }

//     return div;
//     };

//   legend.addTo(myMap);
    
// });


// // Creating map object
// var myMap = L.map("map", {
//   center: [
//     37.09, -95.71
//   ],
//   zoom: 5,
// });


