var username = "Ali Zia";
console.log("LoweCase Name: ".concat(username.toLowerCase()));
console.log("UpperCase Name: ".concat(username.toUpperCase()));
var words = username.split(" ");
var titleCaseWords = [];
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    titleCaseWords.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}
console.log("Titlecase: ".concat(titleCaseWords.join(" ")));
