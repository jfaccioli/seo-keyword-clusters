// heat map for Zooplankton layer
// var zoo = "../static/data/zoo.geojson";
var url = "/api/zooplankton"
  
  d3.json(url).then(function(zooData) {
    var latitudes = zooData.Latitude
    var longitudes = zooData.Longitude
    var taxon_per_m3s = zooData.taxon_per_m3
    var log2_m3 = zooData.log2_m3
    // console.log(zooData)
//     console.log(zooData.features[0].geometry.coordinates)
    var heatArrayZoo = [];

    Object.keys(latitudes).forEach(function(key) {
    heatArrayZoo.push([latitudes[key], longitudes[key], log2_m3[key]]);
    });
    // console.log(heatArrayZoo) 

    var zooHeatMap = L.heatLayer(heatArrayZoo, {
    radius: 15,
    blur: 4,
    max: 20,
    minOpacity: 0.3
  }) 
 // var phyto = "../static/data/phyto.geojson";
  var url2 = "/api/phytoplankton"

  d3.json(url2).then(function(phytoData) {
    
    var heatArrayPhyto = [];

    var latitudes = phytoData.Latitude
    var longitudes = phytoData.Longitude
    var taxon_per_m3s = phytoData.taxon_per_m3
    var log2_m3 = phytoData.log2_m3

    Object.keys(latitudes).forEach(function(key) {
      heatArrayPhyto.push([latitudes[key], longitudes[key], log2_m3[key]]);
      });
    // phytoData.features.forEach(function(point) {
    // heatArray.push([point.geometry.coordinates[0], point.geometry.coordinates[1], point.properties.taxon_per_m3]);
    // });
     
    var phytoHeatMap = L.heatLayer(heatArrayPhyto, {
    radius: 15,
    blur: 4, 
    max: 20,
    minOpacity: 0.3
    })

    // Create baseMaps for layers
  var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    maxZoom: 13,
    zoomOffset: -1,
    id: "mapbox/satellite-v9",
    accessToken: API_KEY
  });
  
   var street = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 13,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    });

        // Create a baseMaps object
  var baseMaps = {
     "Satellite Map": satellite,
     "Street Map": street
};

// Create an overlay object
var overlayMaps = {
  "Zooplankton": zooHeatMap,
  "Phytoplankton": phytoHeatMap
};

// define a map object
var myMap = L.map("map", {
  center: [-33.7749, 120.4194],
  zoom: 3,
  layers: [satellite, phytoHeatMap]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
    });  
    });




  //   var route_list = [];

  //   Object.keys(route).forEach(function(key) {
  //   route_list.push([routes[key], lat[key], long[key], taxon_value[key]]);
  // });