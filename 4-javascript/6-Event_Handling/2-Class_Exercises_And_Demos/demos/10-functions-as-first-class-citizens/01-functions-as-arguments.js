/*
 * In JS, functions are actually objects. This makes them "first-class citizens", meaning they can be passed around to other functions as arguments (and even returned from other functions). 
 * 
 * Here we see how they can be passed as arguments. 
 */

function square( n ) {
    return n * n;
}

function cube( n ) {
    return n * n * n;
}

function sumSquare( a, b ) {
    return square(a) + square(b);
}

function sumCube( a, b ) {
    return cube(a) + cube(b);
}

function sumSqrt( a, b ) {
    return Math.sqrt(a) + Math.sqrt(b);
}

// The sum function takes another function fn as argument and uses it internally
function sum( a, b, fn ) {
    return fn(a) + fn(b);
}

// Using separate functions to calculate sum of squares, cubes etc. of arguments is inefficient.
console.log( sumSquare( 1, 2 ) );
console.log( sumCube( 1, 2 ) );
console.log( sumSqrt( 1, 2 ) );

console.log( '***' );

// It is convenient to use the single function sum() instead to find sum of arguments after applying a transformation on each argument (square, cube, Math.sqrt etc.)
console.log( sum( 1, 2, square ) );
console.log( sum( 1, 2, cube ) );
console.log( sum( 1, 2, Math.sqrt ) );