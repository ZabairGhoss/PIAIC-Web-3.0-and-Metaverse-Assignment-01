"use strict";
exports.__esModule = true;
exports.updated_guest_list = void 0;
var Q14_1 = require("../Exercise-14/Q14");
var unableToAttend = "Ammar Naeem";
var replacement = "Ahmad Faraz";
console.log("\n\n Unfotunately, Mr. ".concat(unableToAttend, ", couldn't make to attend the Dinner.\n"));
exports.updated_guest_list = Q14_1.guest_list.filter(function (person) { return person !== unableToAttend; });
exports.updated_guest_list.push(replacement);
exports.updated_guest_list.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are cordially invited to dinner with me. Please let me know if you are available.\nBest regards,\nZabair Ghoss"));
});
