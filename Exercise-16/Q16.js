"use strict";
exports.__esModule = true;
exports.guest_list = void 0;
var Q15_1 = require("../Exercise-15/Q15");
var newGuest1 = 'Talha';
var newGuest2 = 'Mohsin';
var newGuest3 = 'Ayub';
console.log("AlHamduLillah! I find a bigger dinner table!");
Q15_1.updated_guest_list.unshift(newGuest1);
var mid = Q15_1.updated_guest_list.length / 2;
Q15_1.updated_guest_list.splice(mid, 0, newGuest2);
//the append() method of Array is not supported in JS or TS
Q15_1.updated_guest_list.push(newGuest3);
exports.guest_list = Q15_1.updated_guest_list;
Q15_1.updated_guest_list.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are cordially invited to dinner with me. Please let me know if you are available.\nBest regards,\nZabair Ghoss"));
});
