/**
 * Type-safe equality and inequality operators
 * === and !==
 *
 * If a and b have same value but different data types, even then a == b will be true
 * a === b will be false because === is the type-safe equality comparison operator
 * a !== b is same as !(a === b)
 */

var strTen = '10';
var numTen = 10;

console.log( strTen == numTen );	// true
console.log( strTen === numTen );	// false (though values are same, the data types are different)

// Try this...
// !== is the negation of ===
// a !== b is the same as !( a === b ). Thus either data type or value should not match if a !== b is to be true.