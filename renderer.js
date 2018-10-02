// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
ds = require('./app/js/datasource.js');
d3 = require('d3');

const bar_scale = d3.scaleLinear().domain([0.8, 1, 1.2]).range(['#E69F00', '#CCCCCC', '#E69F00']);

function do_svg_panel(svg_panel, load_data) {

    const name_column_start = 0;
    const name_column_width = 250;
    const name_column_right_pad = 5;
    const type_column_start = name_column_start + name_column_width;
    const type_column_width = 80;
    const alarm_column_start = type_column_start + type_column_width;
    const alarm_column_width = 40;
    const histo_column_start = alarm_column_start + alarm_column_width;
    const histo_100_width = 400;
    const panel_right_headroom = 100;
    const canvas_width = name_column_width + histo_100_width + type_column_width + panel_right_headroom;
    const padding_top = 1;
    const padding_bottom = 1;
    const inner_bar_height = 4;
    const outer_bar_padding = 6;
    const outer_bar_height = inner_bar_height + (outer_bar_padding * 2);
    const row_height = outer_bar_height + padding_bottom + padding_top;
    const font_size = outer_bar_height;
    const font_padding = font_size + ((row_height - font_size) / 2);

    let required_height = load_data.length * row_height;

    let svg_canvas = svg_panel.append("svg:svg")
        .attr("width", canvas_width)
        .attr("height", required_height);

    load_data.sort(function(a, b) {
            let return_value = ('' + a.type).localeCompare(b.type);
            if (return_value === 0) {
                return_value =  ('' + a.node).localeCompare(b.node);
            }
            return return_value;
        }).forEach(function(item, index) {
        let y_offset = (index * row_height);

        if (index % 2) {
            svg_canvas.append("rect")
                .attr("height", row_height)
                .attr("width", canvas_width)
                .attr("fill", "#EEEEEE")
                .attr("x", 0)
                .attr("y", y_offset);
        }
        svg_canvas.append("text")
            .attr("x", name_column_width - name_column_right_pad)
            .attr("y", y_offset + font_padding)
            .attr("font-size", font_size)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "end")
            .text(item.node);

        svg_canvas.append("text")
            .attr("x", type_column_start + (type_column_width / 2))
            .attr("y", y_offset + font_padding)
            .attr("font-size", font_size)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle")
            .text(item.type);

        svg_canvas.append("text")
            .attr("x", alarm_column_start + (alarm_column_width / 2))
            .attr("y", y_offset + font_padding)
            .attr("font-size", font_size)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle")
            .text(item.flags);

        let used_proportion = item.allocated / item.total;
        let load_proportion = item.load / item.allocated;
        let load_absolute = item.load / item.total;

        svg_canvas.append("rect")
            .attr("height", outer_bar_height)
            .attr("width", histo_100_width * used_proportion)
            .attr("fill", bar_scale(used_proportion))
            .attr("x", histo_column_start)
            .attr("y", y_offset + padding_top);

        svg_canvas.append("rect")
            .attr("height", inner_bar_height)
            .attr("width", histo_100_width * load_absolute)
            .attr("fill", bar_scale(load_proportion))
            .attr("x", histo_column_start)
            .attr("y", y_offset + padding_top + outer_bar_padding);

    });
}


function refresh_svg_panel() {
    do_svg_panel(d3.select("#svgPanel"), ds());
}

d3.select("#refresh")
    .on("click", refresh_svg_panel);

refresh_svg_panel();

