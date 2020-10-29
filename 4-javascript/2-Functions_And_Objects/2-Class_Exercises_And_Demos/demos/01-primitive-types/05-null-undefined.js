var someVariable1; // uninitialized variable (undefined is a special value given for such variables)
console.log( 'someVariable1 = ', someVariable1 );
console.log( 'undefined = ', undefined );

var someVariable2 = undefined;
console.log( 'someVariable2 = ', someVariable2 );

var someVariable3 = null; // another special value - use in case you don't know what to give as initial value for a variable
console.log( 'someVariable3 = ', someVariable3 );