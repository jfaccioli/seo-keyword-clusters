//  **** box plots ***


var ul = "/api/phyto_groupby_route"
d3.json(ul).then(function(phytodata) {
    var ulz = "/api/zoo_groupby_route"
    d3.json(ulz).then(function(zoodata) {
        var tracephyto = {
            y: Object.values(phytodata.taxon_per_m3),
            name: "Phytoplankton Routes",
            type: "box",
            boxpoints: "all"
        };
        
        var tracezoo = {
            y: Object.values(zoodata.taxon_per_m3),
            name: "Zooplankton Routes",
            type: "box",
            boxpoints: "all"
        };
        
        var data = [tracephyto];
        
        var layout = {
            title: "Avg Phytoplankton Count per m3 for Each Route",
            yaxis: { title: " Avg Count (/m3)"}
        };
        
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("phyto_bar_plot", data, layout);

        var data = [tracezoo];

        var layout = {
            title: "Avg Zooplankton Count per m3 for Each Route",
            yaxis: { title: "Avg Count (/m3)"}
        };

        Plotly.newPlot("zoo_bar_plot", data, layout);
    });  
});
// write some text on the page
var theDiv = document.getElementById("box_p1");
var content = document.createTextNode(
    "Here are your standard box and whisker plots for the total amount of phytoplankton and zooplankton per m3 of water at certain coordinates along CRS routes. The plot is important to quickly make sense of the data and its variability. Both plots heavily indicate that the majority of the measurements are at or below the 1st quartile. Suggesting the data is heavily skewed towards zero."
);
theDiv.appendChild(content);

var theDiv = document.getElementById("box_p2");
var content = document.createTextNode(
    "The skewness is no biggie! All it suggests that we may have to reprioritize which measure of central tendency are important. For example, in future visualisations we might be more interested in median over mean. Understanding the spread of data is also very helpful on what sort of scale of magnitude we need when mapping data points."
);
theDiv.appendChild(content);

var theDiv = document.getElementById("box_p3");
var content = document.createTextNode(
    "Looking at the phytoplankton box and whisker plot. For every set of coordinates sampled, the median value of phytoplankton per cubic metre of water has around 6.5k phytoplankton!"
);
theDiv.appendChild(content);