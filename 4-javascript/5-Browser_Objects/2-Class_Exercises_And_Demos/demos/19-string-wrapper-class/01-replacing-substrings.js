/**
 * String is a wrapper class for primitive strings
 * It provides useful methods for working with strings
 * Note: Strings are immutable in JS - they characters cannot be replaced. Many of these methods therefore return a new string.
 */

// Replacing substrings using replace()

// Superheroes love taking on responsibility
var superheroQuote = 'With great power comes greater responsibility';

// strings are immutable
var superzeroQuote = superheroQuote.replace( 'responsibility', 'electricity bill' );

console.log( superzeroQuote );
console.log( superheroQuote );

// since strings are immutable, to change the original string we need to assign the string returned by replace to the same string variable
superheroQuote = superheroQuote.replace( 'responsibility', 'electricity bill' );
console.log( superheroQuote );