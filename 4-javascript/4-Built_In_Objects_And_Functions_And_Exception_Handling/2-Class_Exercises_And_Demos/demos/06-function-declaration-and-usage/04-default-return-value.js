/**
 * Functions that don't end execution with an explicit return statement actually return the special value undefined.
 * Thus in JS, a function always returns some value
 */

function sayHello() {
    console.log( 'Hello there!' );
}

console.log( sayHello() );	// outputs undefined