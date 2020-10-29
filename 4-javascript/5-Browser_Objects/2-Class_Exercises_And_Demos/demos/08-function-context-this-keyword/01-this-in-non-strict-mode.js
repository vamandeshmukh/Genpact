/**
 * Every function call is associated with a context
 * The context is a variable accessed using the 'this' keyword
 * The value of the context variable depends on various factors
 * Note: Executing this script in Node.js will set the function's context to Node's global object. In a browser it is set to the window object (copy, paste and execute it in Developer Tools console tab)
 */

// the context for a function is usually the window object (an object created by the browser)
function sayHello() {
    console.log( 'Hello there!' );
    console.log( this );	// window
}

sayHello();