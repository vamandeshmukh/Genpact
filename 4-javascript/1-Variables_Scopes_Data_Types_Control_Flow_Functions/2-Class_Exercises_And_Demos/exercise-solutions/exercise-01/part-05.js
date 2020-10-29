console.log( NaN == NaN ); // false - NaNs are not comparable
console.log( NaN === NaN ); // false - NaNs are not comparable

console.log( isNaN( NaN ) ); // true - this is the way to chcek for a NaN
console.log( Number.isNaN( NaN ) ); // true - this is the way to chcek for a NaN (alternative)
