/**
 * Extract a substring from a string using either substr() or substring() - the two have different behavior.
 * Note: Again, neither modifies the string
 */

var superheroQuote = 'With great power comes greater responsibility';

// Give start index and number of characters
var substring1 = superheroQuote.substr( 5, 5 );
console.log( 'substring1 is', substring1 );

// string between start and end index extracted (not including character at end index)
var substring2 = superheroQuote.substring( 11, 16 );
console.log( 'substring2 is', substring2 );