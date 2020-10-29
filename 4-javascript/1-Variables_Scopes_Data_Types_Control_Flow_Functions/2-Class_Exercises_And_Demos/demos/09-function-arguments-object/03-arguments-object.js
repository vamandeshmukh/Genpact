/**
 * A function has access to an arguments object which holds the actual arguments passed at runtime
 * It is similar to an array, in the sense that it's items (the arguments passed) are indexed with 0-based indices and the length property gives the total number of arguments
 * It is an however an object, not an array
 */

function superSum( a, b ) {
    // these still hold the first 2 arguments passed (redundant though)
    console.log( a, b );
    console.log( 'typeof arguments = ', typeof arguments );
    console.log( 'arguments instanceof Array? ', arguments instanceof Array );
    
    for( var i = 0, sum = 0, numArgs = arguments.length; i < numArgs; i++ ) {
        sum += arguments[i];
    }
    return sum;
}

console.log( superSum( 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ) );