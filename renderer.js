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

    /**
     * Given a node type and a measure of the difference between expected
     * and actual work effort, return a string that indicates the status in
     * the form of a CSS class name
     * @param type
     * @param proportion
     */
    function get_status_class(type, proportionGap) {
        let alert_class = "";
        if ((type == 'BI') || (type == 'IC')) {
            alert_class = "safe"
        }
        else if (proportionGap >= 0.1) {
            alert_class = "veryBad";
        }
        else if (proportionGap >= 0.05) {
            alert_class = "bad";
        }
        else {
            alert_class = "good";
        }
        return alert_class;
    }

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
        .attr("class", function(d) {
            load_stat = Math.abs(1 - (d.load / d.total));
            let alert_class = get_status_class(d.type, load_stat);
            return "top " + alert_class;
        })
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
            load_stat = d.load / d.total;
            difference = Math.abs(1 - load_stat);
            return [d.allocated, d.total, d.load, load_stat, difference].join(", ");
        })
    ;
}

document.getElementById('ping').addEventListener('click', fill_in_status);

fill_in_status();
