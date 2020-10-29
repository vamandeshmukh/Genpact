/**
 * Just as variable declarations are hoisted, so are function declarations
 */

sayHello();	// since the below function declaration is hoisted to the top of the scope, this statement does not end up as a call to an undefined function

// this function declaration gets hoisted to the top of the scope
function sayHello() {
    console.log( 'Hello there!' );
}