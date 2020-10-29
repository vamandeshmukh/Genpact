/**
 * Date instance methods
 * The getter methods
 */

var today = new Date();

console.log( 'Day = ', today.getDay() );
console.log( 'Date = ', today.getDate() );
console.log( 'Month = ', today.getMonth() ); // Jan = 0, Feb = 1, ..., Dec = 11
console.log( 'Year = ', today.getFullYear() );

console.log( 'Hours = ', today.getHours() );

// timezone offset is in minutes
console.log( 'Timezone offset = ', today.getTimezoneOffset() );

console.log( 'Today = ', today.toString() ); // local representation
console.log( 'Today (UTC) = ', today.toUTCString() ); // GMT representation (UK)