// some instance methods of the Number class

var num = 123.142857;
var strNum = '123.142857';

// Rounds off to 5 significant digits (includes digits both before and after decimal point)
console.log( 'num.toPrecision( 5 ) =', num.toPrecision( 5 ) );

// Rounds off, but we have 5 digits AFTER decimal point
console.log( 'num.toFixed( 5 ) =', num.toFixed( 5 ) );

// Number class versions of the global parseInt() and parseFloat() also exist
console.log( 'Number.parseInt( num ) =', Number.parseInt( num ) ); // outputs 123
console.log( 'Number.parseFloat( num ) =', Number.parseFloat( num ) ); // outputs 123.456

// surprisingly NaN values are not comparable
console.log( 'NaN === NaN ?', NaN === NaN );	// false
console.log( 'NaN !== NaN ?', NaN !== NaN );	// true (two NaNs are always treated as unequal)

// We need to use Number.isNaN() to do NaN checks [available in ES5+] (a similar method isNaN() also available globally before ES5). However, Number.isNaN() is always preferable in ES5+.
console.log( 'Number.isNaN(NaN) =', Number.isNaN(NaN) );