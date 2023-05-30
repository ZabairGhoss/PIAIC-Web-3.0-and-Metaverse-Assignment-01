function make_sandwich(ingredients) {
    console.log('The Sandwich Ordered with following Ingredients:');
    ingredients.forEach(function (ingredient) {
        console.log("- ".concat(ingredient));
    });
}
var sandwich1 = ['Bread', 'Ham', 'Cheese'];
var sandwich2 = ['Bread', 'Lettuce', 'Tomato', 'Mayonnaise'];
var sandwich3 = ['Bread', 'Peanut Butter', 'Jelly'];
make_sandwich(sandwich1);
make_sandwich(sandwich2);
make_sandwich(sandwich3);
