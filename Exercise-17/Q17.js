"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.invitedPeople = void 0;
var Q16_1 = require("../Exercise-16/Q16");
console.log("\n\nI'm sorry for inconvenience, there is only 2 people are allowed for dinner.\n");
while (Q16_1.guest_list.length > 2) {
    var guest = Q16_1.guest_list.pop();
    console.log("Sorry, ".concat(guest, ", you can't be invited to dinner."));
}
console.log("Hello, ".concat(Q16_1.guest_list[0], "! You're still invited to dinner."));
console.log("Hello, ".concat(Q16_1.guest_list[1], "! You're still invited to dinner."));
exports.invitedPeople = __spreadArray([], Q16_1.guest_list, true);
Q16_1.guest_list.pop();
Q16_1.guest_list.pop();
console.log("Guest list: ".concat(Q16_1.guest_list));
