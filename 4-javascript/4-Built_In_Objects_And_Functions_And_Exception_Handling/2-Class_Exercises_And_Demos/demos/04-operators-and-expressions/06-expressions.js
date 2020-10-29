/**
 * Expressions are formed by combining multiple operands and operators
 * The parenthesis is used to group operations and have them evaluated first
 * When an invalid value for an operand is encountered (undefined, NaN etc.), the expression evaluates to NaN/Infinity etc.
 * Infinity, -Infinity are two special number values
 */

var timeTravelledBySunRay = 8 * 60 + 20;
var distanceBetweenEarthAndSunInMetres = ( 8 * 60 + 20 ) * 299792458;

console.log( timeTravelledBySunRay, distanceBetweenEarthAndSunInMetres );

console.log( 1 / 0 ); // Unlike most languages, this evaluate to a special number value called Infinity

console.log( -1 / 0 ); // -Infinity

// + is overloaded for addition as well as string concatenation - so it works fine
console.log( distanceBetweenEarthAndSunInMetres + " metres" );

// division cannot be used with a string operand (unless it can be parsed as a number) - hence this expression evaluates to NaN
console.log( distanceBetweenEarthAndSunInMetres / "a" );