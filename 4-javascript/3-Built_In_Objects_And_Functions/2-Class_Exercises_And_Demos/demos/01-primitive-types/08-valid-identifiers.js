/**
* Identifiers can begin with _, $ or a letter of the alphabet (a-z and A-Z).
* They can be followed by the same set of characters, and in addition digits 0-9.
* A digit however cannot be the first character
*/

// valid identifiers for variables
var $ = "US Dollar";
var _one = 1;
var day3 = "Jan 3";

console.log( $, _one, day3 ); // check console for output

// invalid identifier
var 32bitProcessor = "Intel 80386"; // this line throws an error and script execution stops
console.log( 32bitProcessor ); // this line will not be executed and hence there is no output