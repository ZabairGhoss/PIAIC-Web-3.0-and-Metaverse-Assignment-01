"use strict";
exports.__esModule = true;
var Q41_1 = require("../Exercise-41/Q41");
function make_great(magicians) {
    var modified_magicians = magicians.map(function (magician) {
        return "great ".concat(magician);
    });
    return modified_magicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magiciansArray = Q41_1["default"];
var modified_magicians = make_great(Q41_1["default"]);
show_magicians(modified_magicians);
show_magicians(magiciansArray);
