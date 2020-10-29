/**
* Other useful string instance methods
* Remember, strings are immutable. SO many methods return a string, while the original string remains unchanged.
* Note: String searches are case-sensitive
*/

var drunkQuote = ' This may be the beer talking, but I really, really, really, really love beer.';

// concatenating strings - of course you can use + operator too
var afterAFewMoreSips = drunkQuote.concat( ' Did I tell you this?', ' I really, really love beer.  ' );
console.log( 'afterAFewMoreSips =', afterAFewMoreSips );
console.log( 'drunkQuote =', drunkQuote );

// index of first occurence of "really"
console.log( 'afterAFewMoreSips.indexOf( "really" ) =', afterAFewMoreSips.indexOf( 'really' ) );

// you can provide a start index for searching too - search starts at the 41st character
console.log( 'afterAFewMoreSips.indexOf( "really", 40 ) =', afterAFewMoreSips.indexOf( 'really', 40 ) );

// and this is where the last "really" comes
console.log( 'afterAFewMoreSips.lastIndexOf( "really" ) =', afterAFewMoreSips.lastIndexOf( 'really' ) );

// let's strip the leading and trailing spaces (available in ES5+)
console.log( 'afterAFewMoreSips.trim() =', afterAFewMoreSips.trim() );

// toLowerCase()
console.log( 'afterAFewMoreSips.toLowerCase() =', afterAFewMoreSips.toLowerCase() );

// toUpperCase()
console.log( 'afterAFewMoreSips.toUpperCase() =', afterAFewMoreSips.toUpperCase() );

console.log( afterAFewMoreSips ); // will this be uppercase? no!!