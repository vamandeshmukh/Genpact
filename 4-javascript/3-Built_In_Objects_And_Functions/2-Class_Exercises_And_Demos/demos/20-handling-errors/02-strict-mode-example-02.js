function Person( name, age ) {
    'use strict'; // strict mode can be applied to a function scope too - rest of the code outside the function will be run in non-strict mode.
    
    this.name = name;
    this.age = age;
}

var john = Person( 'john', 30 ); // we forgot to call with the new operator - the Person function's context (this) is now undefined (strict mode) - accessing this.name or this.age now throws an error as undefined is not an object (and hence has no properties)