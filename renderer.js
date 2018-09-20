// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
ds = require('./app/js/datasource.js')

function setColour () {
    sp = document.getElementById('statsPanel');
    sp.style.color = 'red';
}

document.getElementById('ping').addEventListener('click', setColour);


function renderStatus(value) {
    return "<p>" + value.node + "</p>";
}


let data = ds();
let statsPanel = document.getElementById('statsPanel');

statsPanel.innerHTML = "";

data.forEach(function(value) {
    statsPanel.innerHTML += renderStatus(value);
});