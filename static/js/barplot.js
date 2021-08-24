
// // api url
// var urlz = "/api/zooplankton_groupby_2020"
// function zoo_plot() {
//     d3.json(urlz).then(function(zoo_data) {
//     // console.log(data);

//         var route = Object.values(zoo_data.Route);
//         var year = Object.values(zoo_data.Year);
//         var taxon_value = Object.values(zoo_data.taxon_per_m3);

//             var trace1 = {
//             x: route,
//             y: taxon_value,
//             type: "bar",
//             // text: `<b>/m3 on average`,
//             marker: {
//                 color: 'green',
//                 size: 0,
//             },
//             };
//         //   ​
//         var data = [trace1];
//         //   ​
//         var layout = {
//             title: `Average ZooPlankton/m3 for Each CPR Route ${year[0]}`,
//             xaxis: { title: "Continuous Plankton Tracker Route" },
//             yaxis: { title: "Average Zooplankton (/m3)" }
//         };

//             Plotly.newPlot('zoo_route_plot', data, layout);
//     });
// }
// var urlp = "/api/phytoplankton_groupby_2020"
// function phyto_plot(){
//     d3.json(urlp).then(function(phyto_data) {
//     // console.log(data);

//         var route = Object.values(phyto_data.Route);
//         var year = Object.values(phyto_data.Year);
//         var taxon_value = Object.values(phyto_data.taxon_per_m3);

//             var trace1 = {
//             x: route,
//             y: taxon_value,
//             type: "bar",
//             // text: `<b>/m3 on average`,
//             marker: {
//                 color: 'orange',
//                 size: 0,
//             },
//             };
//         //   ​
//         var data = [trace1];
//         //   ​
//         var layout = {
//             title: `Average PhytoPlankton/m3 for Each CPR Route ${year[0]}`,
//             xaxis: { title: "Continuous Plankton Tracker Route" },
//             yaxis: { title: "Average Phytoplankton (/m3)" }
//         };

//             Plotly.newPlot('phyto_route_plot', data, layout);
//     });
// }

// var ul = "/api/phyto_groupby_route"

// d3.json(ul).then(function(phyto_data) {
//      console.log(phyto_data)
//      console.log(Object.entries(phyto_data))
//      var x = Object.values(phyto_data.Year).concat(phyto_data.taxon_per_m3)
//      console.log(x)
//     // var route = phyto_data.Route;
//     var year = Object.values(phyto_data.Year);
//     // console.log(year)
//     function onlyUnique(value, index, self) {
//         return self.indexOf(value) === index;
//       }
// // ordered list of years
//     var year_unique = year.filter(onlyUnique).sort().reverse();
      
//     console.log(year_unique);

//     // for loop to append on subject ids options onto the select element  
//     for (var j = 0; j < year_unique.length; j++) {
//         d3.select("#selDataset")
//             .append("option")
//             .attr("value", year_unique[j])
//             .text(year_unique[j]);           
//         }    
// });

// function optionChanged() {
//     d3.json(ul).then(function(data) {

//     //define variable to draw data from 
//     var dropdownMenu = d3.select("#selDataset");

//     // Assign the value of the dropdown menu option to a variable
//     var menuId = dropdownMenu.property("value");   
//     console.log(menuId)
//     console.log(Object.values(data.Year))
//     var urlp = `/api/phytoplankton_groupby_${menuId}`
//     var urlz = `/api/zooplankton_groupby_${menuId}`
//     console.log(urlp)

//     d3.json(urlp).then(function(phyto_data) {
//         // console.log(data);
        
//             var route = Object.values(phyto_data.Route);
//             var year = Object.values(phyto_data.Year);
//             var taxon_value = Object.values(phyto_data.taxon_per_m3);
        
//                 var trace1 = {
//                 x: route,
//                 y: taxon_value,
//                 type: "bar",
//                 // text: `<b>/m3 on average`,
//                 marker: {
//                     color: 'orange',
//                     size: 0,
//                   },
//                 };
//             //   ​
//             var data = [trace1];
//             //   ​
//             var layout = {
//                 title: `Average PhytoPlankton/m3 for Each CPR Route ${year[0]}`,
//                 xaxis: { title: "Continuous Plankton Tracker Route" },
//                 yaxis: { title: "Average Phytoplankton (/m3)" }
//             };
        
//                 Plotly.newPlot('phyto_route_plot', data, layout);
//             });

//     d3.json(urlz).then(function(zoo_data) {
//     // console.log(data);

//     var route = Object.values(zoo_data.Route);
//     var year = Object.values(zoo_data.Year);
//     var taxon_value = Object.values(zoo_data.taxon_per_m3);

//         var trace1 = {
//         x: route,
//         y: taxon_value,
//         type: "bar",
//         // text: `<b>/m3 on average`,
//         marker: {
//             color: 'green',
//             size: 0,
//             },
//         };
//     //   ​
//     var data = [trace1];
//     //   ​
//     var layout = {
//         title: `Average ZooPlankton/m3 for Each CPR Route ${year[0]}`,
//         xaxis: { title: "Continuous Plankton Tracker Route" },
//         yaxis: { title: "Average Zooplankton (/m3)" }
//     };

//         Plotly.newPlot('zoo_route_plot', data, layout);
//     });

    

//     });
// }

// zoo_plot();
// phyto_plot();

// // words on the page
// var theDiv = document.getElementById("vis_p1");
// var content = document.createTextNode(
//     "Phytoplankton or “plant drifter” is a catch-all category for all the tiny aquatic organisms that can turn sunlight into food via photosynthesis. While zooplankton or “animal drifter” are also an important part to the ocean ecosystem as they feed on phytoplankton then become a food source for larger predators such as fish. A lack of either type of plankton can create an imbalance in the ecosystem having devastating effects like algae bloom, low biodiversity or high carbon dioxide levels. Therefore there is an importance to monitor (and visualise!) the populations of these creatures over time to establish any possible alarming trends that need to be addressed."
// );
// theDiv.appendChild(content);

// var theDiv = document.getElementById("vis_p2");
// var content = document.createTextNode(
//     "Places with varying ecological systems and climates, ofcourse, have different degrees of expected hospitality towards reproduction and growth of phyto and zooplankton. With the latter relying on the former in the biological food chain. One of our best methods of monitoring the population trend, is done by grouping observations surveyed Continuous Plankton Tracker routes. With each having their own fixed range of coordinates that they regularly over patrol. Letting us more easily localise trends and allows us for a more precise response in case a plankton imbalance does occur."
// );
// theDiv.appendChild(content);
// P


// llllllllllllllllllllllllllllllllllllllllll
var keyword_clustering_data = "/keyword_clustering_data"
function zoo_plot() {
    d3.json(keyword_clustering_data).then(function(keyword_clustering) {
    console.log(data);
    });
}

    //     var route = Object.values(zoo_data.Route);
    //     var year = Object.values(zoo_data.Year);
    //     var taxon_value = Object.values(zoo_data.taxon_per_m3);

    //     var values = [
    //         ['Salaries', 'Office', 'Merchandise', 'Legal', '<b>TOTAL</b>'],
    //         [1200000, 20000, 80000, 2000, 12120000],
    //         [1300000, 20000, 70000, 2000, 130902000],
    //         [1300000, 20000, 120000, 2000, 131222000],
    //         [1400000, 20000, 90000, 2000, 14102000]]
      
    //   var data = [{
    //     type: 'table',
    //     header: {
    //       values: [["<b>EXPENSES</b>"], ["<b>Q1</b>"],
    //                    ["<b>Q2</b>"], ["<b>Q3</b>"], ["<b>Q4</b>"]],
    //       align: "center",
    //       line: {width: 1, color: 'black'},
    //       fill: {color: "grey"},
    //       font: {family: "Arial", size: 12, color: "white"}
    //     },
    //     cells: {
    //       values: values,
    //       align: "center",
    //       line: {color: "black", width: 1},
    //       font: {family: "Arial", size: 11, color: ["black"]}
    //     }
    //   }]
      
    //   Plotly.newPlot('myDiv', data);