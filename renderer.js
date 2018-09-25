// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
ds = require('./app/js/datasource.js');
d3 = require('d3');

function setColour () {
    sp = document.getElementById('statsPanel');
    sp.style.color = 'red';
}

document.getElementById('ping').addEventListener('click', setColour);


function renderStatus(value) {
    return "<p>" + value.node + "</p>";
}


let node_data = ds();
// let statsPanel = document.getElementById('statsPanel');
//
// statsPanel.innerHTML = "";
//
// data.forEach(function(value) {
//     statsPanel.innerHTML += renderStatus(value);
// });
//
//

let my_divs = d3.select("#statsPanel").selectAll("div").data(node_data);

my_divs.enter().append("div").attr("class", "statusDiv")
    .text(function(d) {
        return "<p>" + d.node + "</p>";
    });