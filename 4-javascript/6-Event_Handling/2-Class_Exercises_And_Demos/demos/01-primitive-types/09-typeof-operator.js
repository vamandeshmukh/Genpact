/**
 * typeof operator takes a variable or a data-type literal as operand and evaluates to a string representing the internal (implicit) data type
 */
var PI = 3.141592653589793;       // a number value
var greeting = "Good morning";    // a string
var flag = true;				  // a boolean

console.log( typeof PI );         // "number"
console.log( typeof greeting );   // "string"
console.log( typeof flag );       // "boolean"

// You can query the data type of a number, boolean or string literal too
console.log( typeof 0.02 );       // "number"

// typeof an object is "object". So is typeof the special value null
console.log( typeof {} ); 			// "object" - the {} is an object without any own properties
console.log( typeof { a: 1 } ); 	// "object"
console.log( typeof null );			// "object" - one of JavaScript's quirks! A null value is actually not an object

console.log( typeof undefined ); 	// "undefined"

console.log( typeof function() {} );	// "function" - This is the simplest function in JS