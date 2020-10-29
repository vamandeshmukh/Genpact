/**
 * Scope of a variable/function etc.
 * It defines the section of the script where the variable/function etc. cab be used.
 * 
 * There are only 2 scopes for variables (declared with var keyword) in JavaScript
 * 1. Global scope
 * 2. Function scope
 * 
 * Global scope:
 * When a variable is declared outside of all functions, it is said to be a global variable
 * Global variables are accessible anywhere within the script
 * 
 * Function scope:
 * When a variable is declared within a function, it can be accessed anywhere within the function, but not outside (the function). Such variables are said to be in function scope.
 *
 * Unlike most languages, there is NO block scope
 */
var a = 'Global variable';
console.log( 'a = ', a );

function foo() {
    console.log(  'a (inside foo) = ', a );
    var b = 'Local to foo'
    console.log( 'b = ', b );
    
    if( true ) {
        // variable declared inside an if block
        var c = 'Variable in a block within foo';
        console.log( 'c (inside if block) = ', c );
    }
    
    // can be accessed even outside of the block it is declared in
    console.log( 'c (outside if block) = ', c );
}

foo();

// trying to access an foo scoped variable - throws an error and script stops executing
console.log( 'b = ', b );
console.log( 'c = ', c );