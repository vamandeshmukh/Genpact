// Methods of Array instances

var fruitsToBuy = ['Apples', 'Oranges', 'Bananas'];

// Oops, we forgot the summer favorites - Watermelons and Mangoes. Let's add them to the end of the list using push()
fruitsToBuy.push( 'Watermelons', 'Mangoes' );
console.log( '*** After adding items to the end using push() ***');
console.log( fruitsToBuy );

// Found a last batch of yummy alphonso mangoes. Purchased.
// Remove the last item in the list using pop() - it returns the removed item.
var fruitBought  = fruitsToBuy.pop();
console.log( '*** After removing an item from the end using pop() ***');
console.log( fruitsToBuy );
console.log( 'fruitBought = ', fruitBought );


// Ok, so we found the first item - some nice apples, and bought them. Let's remove the first item from the list
// shift() returns the first item in the array after removing it
fruitBought  = fruitsToBuy.shift();
console.log( '*** After removing first item using shift() ***');
console.log( fruitsToBuy );
console.log( 'fruitBought = ', fruitBought );

// Damn! The apples were rotten :( Let's add it back to the start of the list
// unshift() add the passed item to the list start and returns the length of the updated list
var numItems = fruitsToBuy.unshift( 'Fresh and juicy Apples' );
console.log( '*** After removing first item using shift() ***');
console.log( fruitsToBuy );
console.log( 'numItems = ', numItems );

// Found Oranges and Bananas & bought them.
// Wife calls up to remind she wants Strawberries and Cranberries
// splice() removes a given number of items starting from some index in the array. // Optionally, it can be used to add items at the same point.
// splice() returns an array of items removed
// remove 2 items starting at index 1 and then insert some items there
var fruitsBought = fruitsToBuy.splice( 1, 2, 'Strawberries', 'Cranberries' );
console.log( '*** After removing items from in between and adding some others instead ***');
console.log( fruitsToBuy );
console.log( 'fruitsBought = ', fruitsBought );