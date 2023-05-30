let placesToVisit: string[] = ['Bali', 'New York', 'Paris', 'Tokyo', 'Barcelona'];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order after sort:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse sort:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show that its order has changed
console.log("Reverse order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the array to show that it's back to its original order
console.log("Original order after second reverse:", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();

// Print the array to show that its order has been changed
console.log("Alphabetical order after sort:", placesToVisit);

// Sort the array so it's stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the array to show that its order has been changed
console.log("Reverse alphabetical order after sort:", placesToVisit);