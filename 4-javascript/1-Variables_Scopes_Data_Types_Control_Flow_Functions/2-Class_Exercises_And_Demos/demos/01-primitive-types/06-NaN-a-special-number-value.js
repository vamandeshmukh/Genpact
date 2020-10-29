var someVariable;

// arithmetic expression involving undefined variables will result in NaN
console.log( someVariable + 1 ); // NaN - Not a Number (special Number value)
console.log( typeof NaN ); // "number"

console.log( NaN + 1 ); // results in NaN again