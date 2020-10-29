/**
 * Creates a shopping cart and returns a function to add items to it
 *
 * @param {string} cartName Name of the shopping cart
 * @returns {function} A function that when passed an item name, adds to the shopping cart and displays all items in the cart
 */
function shoppingCart(cartName) {
    var items = [];

    return function (item) {
        items[items.length] = item;
        console.log('Items in shopping cart (' + cartName + ') are ', items);
    }
}

// each of these will remember the name of the shopping cart at the time they were created (cartName)
// Apart from cartName, items[] will also be available in their closure
// Note that every call to shoppingCart() creates a separate set of variables for the inner function (the local variables of shoppingCart)
var groceryCart = shoppingCart('Grocery');
var gadgetsCart = shoppingCart('Gadgets');

groceryCart('Soap');
gadgetsCart('Samsung Galaxy S8');
groceryCart('Cornflakes');
gadgetsCart('Google Chromecast');
groceryCart('Bread');