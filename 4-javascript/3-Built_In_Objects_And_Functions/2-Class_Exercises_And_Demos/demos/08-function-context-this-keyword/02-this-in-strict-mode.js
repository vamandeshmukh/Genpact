/**
 * Every function call is associated with a context
 * The context is a variable accessed using the 'this' keyword
 * The value of the context variable depends on various factors
 */

// However, the context is set to undefined when in strict mode of execution - a mode of execution of scripts that prevents many accidental errors (we will learn more later)
'use strict';

function sayHello() {
    console.log( 'Hello there!' );
    console.log( this );	// undefined
}

sayHello();