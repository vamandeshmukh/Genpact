/**
 * Hoisting of variables:
 * The JS runtime checks for all variable declarations in the script and pushes the declarations to the top of their respective scopes. This is referred to as "hoisting"
 * Only the declaration of variables are hoisted - any assignments remain where they are
*/
var a = 1;	// a is assigned the value 1 here
console.log( 'a = ' + a );	// outputs 1
console.log( 'b = ' + b );	// outputs undefined

var b = 2;	// b is assigned 2 here

console.log( 'b = ' + b );	// outputs 2

function foo() {
    var c = 3;	// c is assigned 3 here

    console.log( 'c = ' + c );	// outputs 3
    console.log( 'd = ' + d );	// outputs undefined

    var d = 4;	// d is assigned 4 here
    
    console.log( 'd = ' + d );	// outputs 4
}

foo();