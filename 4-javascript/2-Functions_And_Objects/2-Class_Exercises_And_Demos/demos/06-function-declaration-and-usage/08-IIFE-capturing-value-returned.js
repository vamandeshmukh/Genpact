/**
 * IIFEs are usually used with functions that return a value.
 * The return value is captured in a variable.
 */

// The greeting returned is captured in the variable
var frenchGreeting = (function disBonjour() {
    return 'Bonjour Mademoiselle';
}());

console.log( frenchGreeting );