/**
 * Function can take more than, or even less than the number of arguments specified in the function declaration
 * If fewer than expected arguments are passed, the trailing arguments are assigned the undefined value
 */

function sum( a, b ) {
    return a + b;
}

// fewer arguments passed
// b will be undefined => 1 + undefined => NaN
console.log( sum( 1 ) );
// b will be unefined => 'hello' + undefined => 'helloundefined'
// Note: The string conversion of undefined is the string 'undefined'
console.log( sum( 'hello' ) );