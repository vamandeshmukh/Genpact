var a = 'one';

function foo() {
    // note that we have not used var while declaring the variable - this is possible in JS (although not recommended)
    // however such variables become global variables!
    b = 'two';
    
    console.log( a, b );	// one two (as expected)
}

foo();	// global variable b will get created in the process

console.log( a, b );	// one two