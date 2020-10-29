/**
 * Function expressions however work like variable declaration + assignment. The declaration is hoisted and assignment of variable to the anonymous function happens only when the particular line is executed
 */

// sayHello is undefined at this point
// It is not an error as such a variable exists due to declaration being hoisted
console.log( sayHello );

// sayHello is undefined and therefore not a function - it cannot be called
// this statement thus results in an error
// script execution stops here and the function assignment does not happen
sayHello();

var sayHello = function() { // sayHello declaration gets hoisted, not assignment
    console.log( 'Hello there!' );
}

// this will work fine if the previous call to sayHello is commented
sayHello();