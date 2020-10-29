// Apart from the JavaScript language, this example tries to teach some Spanish :-P

var a = 1;	// global variable a
var b = 2; 	// global variable b
var c = 3;	// global variable c

console.log( 'a = ' + a );	// outputs 1
console.log( 'b = ' + b );	// outputs 2
console.log( 'c = ' + c );	// outputs 3

function outer() {
    var a = 'one'; // outer-scoped variable a
    
    console.log( 'a = ' + a ); // first outer() is checked for any function-scoped variable called 'a'. Match is found and hence output is 'one'
    console.log( 'b = ' + b ); // outer() is checked for variable 'b', but there is no match. Then the enclosing scope (the global scope in this case if checked). Match is found - outputs 2
    
    function inner() {
        var b = 'dos';	// 2 in Spanish! Ricky Martin, anyone?
        var d = 'las cuatro'; // 4 in Spanish
        
        console.log( 'a = ' + a );	// outputs 'one'
        console.log( 'b = ' + b );	// outputs 'dos'
        console.log( 'c = ' + c );	// outputs 3
        console.log( 'd = ' + d );	// outputs 'las cuatro'
    }
    
    inner();
    
    console.log( 'd = ' + d );	// error - neither outer()'s scope not global scope has defined d
}

outer();