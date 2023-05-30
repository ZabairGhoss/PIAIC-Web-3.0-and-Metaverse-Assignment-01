
function make_sandwich(ingredients: string []){
    console.log('The Sandwich Ordered with following Ingredients:');
    ingredients.forEach((ingredient) => {
        console.log(`- ${ingredient}`);
    })
}

const sandwich1: string[] = ['Bread', 'Ham', 'Cheese'];
const sandwich2: string[] = ['Bread', 'Lettuce', 'Tomato', 'Mayonnaise'];
const sandwich3: string[] = ['Bread', 'Peanut Butter', 'Jelly'];

make_sandwich(sandwich1);
make_sandwich(sandwich2);
make_sandwich(sandwich3);