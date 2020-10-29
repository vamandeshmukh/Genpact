/**
 * The "Scope Chain":
 * When JS runtime tries to resolve an identifier in code to a variable, it traverses up starting from the current scope of execution, right upto the global scope.
 * The nearest matched variable in this process is the one used by the runtime.
 * If the runtime checks right upto the global scope and does not find a match, an error is thrown and script execution stops.
 * 
 * JS allows functions to be declared within other functions!
 * Thus an "inner function" can access the "outer function's" variables (via the scope chain).
 * Note: The outer function cannot access the inner function's variables though.
 */

var a1 = 1;	// global variable a1
var a2 = 2; // global variable a2

function outer() {
    var a1 = 'one'; // function outer scoped variable a1
    
    console.log( a1 ); // first outer() is checked for any function outer scoped variable called 'a1'. Match is found and hence output is 'one'
    console.log( a2 ); // outer() is checked for variable 'a2', but there is no match. Then the enclosing scope (the global scope in this case if checked). Match is found - outputs 2
    console.log( a3 ); // no match in any scope in hierarchy - error and script execution stops
}

outer();