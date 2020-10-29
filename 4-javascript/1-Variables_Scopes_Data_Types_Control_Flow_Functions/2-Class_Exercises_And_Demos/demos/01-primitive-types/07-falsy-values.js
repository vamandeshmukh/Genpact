// false, 0, null, undefined, ""  are "falsy values" - they are equivalent to false when they appear in a conditional expression
// any value apart from the above five values are considered truthy - e.g. true, [], {}, 1, 2, "adfw"
var flag = 0; // change this to false, null, undefined and "" and check that the result remains the same
if( flag ) {
    console.log( 'truthy' );
} else {
    console.log( 'falsy' );
}