
function getLoadData() {
    let base_data = [
        { node: "staging@node2i13.ecdf.ed.ac.uk", type: "BI", reserved: 0, allocated: 0, total: 64, load: 3.01, flags: ""},
        { node: "staging@node2i14.ecdf.ed.ac.uk", type: "BI", reserved: 0, allocated: 0, total: 64, load: 0.01, flags: ""},
        { node: "eddie@node2i16.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.41, flags: ""},
        { node: "eddie@node2i17.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 16.12, flags: ""},
        { node: "eddie@node2i18.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 16.09, flags: ""},
        { node: "eddie@node2i19.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 8.60, flags: ""},
        { node: "eddie@node2i20.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.74, flags: ""},
        { node: "eddie@node2i21.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.12, flags: ""},
        { node: "eddie@node2i22.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 14, total: 16, load: 12.91, flags: ""},
        { node: "eddie@node2i23.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.59, flags: ""},
        { node: "eddie@node2i24.ecdf.ed.ac.uk", type: "IC", reserved: 0, allocated: 1, total: 32, load: 0.01, flags: ""},
        { node: "eddie@node2i25.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.25, flags: ""},
        { node: "eddie@node2i26.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 14.80, flags: ""},
        { node: "eddie@node2i27.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 14.40, flags: ""},
        { node: "eddie@node2i28.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.58, flags: ""},
        { node: "eddie@node2i01.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.55, flags: ""},
        { node: "eddie@node2i02.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 11, total: 16, load: 14.13, flags: ""},
        { node: "eddie@node2i03.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 15, total: 16, load: 12.53, flags: ""},
        { node: "eddie@node2i04.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.78, flags: ""},
        { node: "eddie@node2i05.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.88, flags: ""},
        { node: "eddie@node2i06.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.99, flags: ""},
        { node: "eddie@node2i07.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 7.98, flags: ""},
        { node: "eddie@node2i08.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 12, total: 16, load: 13.91, flags: ""},
        { node: "eddie@node2i09.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.83, flags: ""},
        { node: "eddie@node2i10.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.41, flags: ""},
        { node: "eddie@node2i11.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.71, flags: ""},
        { node: "eddie@node2i12.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 16.47, flags: ""},
        { node: "eddie@node2j08.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 12.37, flags: ""},
        { node: "eddie@node2j09.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.06, flags: ""},
        { node: "eddie@node2j10.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.48, flags: ""},
        { node: "eddie@node2j11.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.94, flags: ""},
        { node: "eddie@node2j12.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 12.17, flags: ""},
        { node: "eddie@node2j13.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 16.03, flags: ""},
        { node: "eddie@node2j14.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.95, flags: ""},
        { node: "eddie@node2j15.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.86, flags: ""},
        { node: "eddie@node2j03.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 40, total: 40, load: 38.46, flags: ""},
        { node: "eddie@node2j04.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 40, total: 40, load: 40.26, flags: ""},
        { node: "eddie@node2j01.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 40, total: 40, load: 28.29, flags: ""},
        { node: "eddie@node2j02.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 40, total: 40, load: 37.01, flags: ""},
        { node: "eddie@node2i29.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 80, total: 80, load: 77.63, flags: ""},
        { node: "eddie@node2i30.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 80, total: 80, load: 76.80, flags: ""},
        { node: "eddie@node2j05.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 15, total: 16, load: 8.27, flags: ""},
        { node: "eddie@node2j06.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 16, total: 16, load: 15.39, flags: ""},
        { node: "eddie@node2j07.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 15, total: 16, load: 14.35, flags: ""},
        { node: "eddie@node1h05.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 27, total: 32, load: 26.78, flags: ""},
        { node: "eddie@node2a03.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.12, flags: ""},
        { node: "eddie@node2a04.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.05, flags: ""},
        { node: "eddie@node2a05.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.03, flags: ""},
        { node: "eddie@node2a06.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 31.96, flags: ""},
        { node: "eddie@node1h28.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 31.72, flags: ""},
        { node: "eddie@node1h29.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.04, flags: ""},
        { node: "eddie@node1h30.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.10, flags: "ad"},
        { node: "eddie@node1h31.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.07, flags: ""},
        { node: "eddie@node1f05.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.05, flags: ""},
        { node: "eddie@node1f06.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 30.02, flags: ""},
        { node: "eddie@node2b06.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.03, flags: ""},
        { node: "eddie@node2b07.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.08, flags: ""},
        { node: "eddie@node2b08.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 17.01, flags: ""},
        { node: "eddie@node2b09.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 31.75, flags: ""},
        { node: "eddie@node2b10.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 17.01, flags: ""},
        { node: "eddie@node2b11.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.07, flags: ""},
        { node: "eddie@node2b12.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.04, flags: ""},
        { node: "eddie@node2b13.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.04, flags: ""},
        { node: "eddie@node2b14.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 28, total: 32, load: 28.07, flags: "ad"},
        { node: "eddie@node2b15.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 32, total: 32, load: 32.04, flags: ""},
        { node: "eddie@node2b16.ecdf.ed.ac.uk", type: "BPC", reserved: 0, allocated: 31, total: 32, load: 31.97, flags: ""}
        ];
    base_data.forEach( function (node) {
        node.flags = "";
        if (Math.random() < 0.1) {
            node.flags = "ad";
        }
        node.load = node.load * (1 + (Math.random() - 0.5) * 0.2);
    })
    return base_data;
}

module.exports = getLoadData