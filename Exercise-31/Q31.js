var users = ['admin', 'Eric', 'John', 'Jane', 'admin123', 'kristine'];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < users.length; i++) {
        console.log("User ".concat(i + 1, ": ").concat(users[i]));
    }
}
// Remove all usernames from the array
users.length = 0;
if (users.length === 0) {
    console.log("We need to find some users!");
}
