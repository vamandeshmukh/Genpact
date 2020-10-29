/**
 * A pair of parenthesis can enclose an expression in JS
 * Adding another pair of parenthesis to the end of a function object will invoke it
 * This idiom in widely used in JS and is known as the Immediately Invoked Function Expression (IIFE, pronounced as 'iffy')
 * One use of this is to avoid any global variables, by enclosing all your script within an IIFE
 */

// The anonymous function is defined and immediately invoked
// Syntax #1
(function( x ) {
    var y = 20;
    console.log( x, y );
})( 10 );

// Alternatively, this can also be used
// Syntax #2
(function( x ) {
    var y = 20;
    console.log( x, y );
}( 10 ));