// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
ds = require('./app/js/datasource.js');
d3 = require('d3');

/**
 * Fills in the current status values for each node in our set of interest.
 *
 */
function fill_in_status() {

    // Get the data from some data source or another
    let node_data = ds();

    // Grab the Status Panel and all the divs that it currently contains.
    // Join it with the data to return a list of elements that currently
    // exist, matched up with their corresponding data point
    let my_divs = d3.select("#statsPanel").selectAll("div.top")
        .data(node_data);

    // Throw away any divs that we may not require...
    // (this should not ever happen, but hey, why not?)
    my_divs.exit().remove();

    // Now add on as many additional div elements that we need
    // and merge them all with their data (existing and additional)
    // In doing so, we slap a 'top' class on the top-level div so
    // we only pull those out in the above select next time around
    my_divs
        .enter().append("div")
        .attr("class", "top")
        .merge(my_divs)
        .text(function (d) {
            return d.node;
        })
        .selectAll("div.scoreDiv")
        .data(function (d) {
            return [d];
        })
        .enter().append("div")
        .attr("class", "scoreDiv")
        .text(function (d) {
            return [d.allocated, d.total, d.load].join(", ");
        })
    ;
}

document.getElementById('ping').addEventListener('click', fill_in_status);

fill_in_status();
