var current_users = ["John", "Jane", "Mike", "Emily", "Alex"];
var new_users = ["Kate", "JOHN", "Sam", "ALEX", "Chris"];
var _loop_1 = function (i) {
    var new_username = new_users[i];
    var is_username_taken = current_users.some(function (username) { return username.toLowerCase() === new_username.toLowerCase(); });
    if (is_username_taken) {
        console.log("Username \"".concat(new_username, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Username \"".concat(new_username, "\" is available."));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
