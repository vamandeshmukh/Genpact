/*
 * In asynchronous functions (functions that complete their execution at a non-deterministic time in future), we want to the results of computation to be processed in some way. Since these values are calculated at some point after the called function itself finishes execution, there needs to be a way to execute required application logic once the results are available.
 *
 * The requirement is accomplished using what is commonly referred to as a callback function. The function being called is passed a function as argument (referred to as callback function), and once the results are available, the callback function is called, passing the results as arguments. The application logic to process the results can be written in the callback function.
 */

// This function synchronously calculates the sum of a and b and calls callback once done, passing the result to it
function sum( a, b, callback ) {
    var result = a + b;
    callback( result );
}

// This function asynchronously calculates the sum of a and b and calls callback once done, passing the result to it
function sumAsync( a, b, callback ) {
    // calculate the sum asynchronously - we simulate a delay of around 1 second
    setTimeout(function() {
        var result = a + b;
        callback( result );
    }, 1000);
}

function logSum( result ) {
    console.log( result );
}

// call sum and sumAsync, passing the callback as third argument
sum( 1, 2, logSum );
sumAsync( 1, 2, logSum );