function make_Shirt(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\"."));
}
// Making a large shirt with the default message
make_Shirt();
// Making a medium shirt with the default message
make_Shirt("M");
// Making a small shirt with a different message
make_Shirt("S", "Hello World!");
