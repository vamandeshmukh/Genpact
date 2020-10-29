/**
 * Date instance methods
 * The setter methods
 * The setters methods return number of milliseconds since epoch to the date set
 */

// set date to beginning of today (local time)
var today = new Date;
today.setHours( 0 );
today.setMinutes( 0 );
today.setSeconds( 0 );
today.setMilliseconds( 0 );
console.log( 'Today = ', today );

// Try this - setter methods for other parts of a date

// Exercise: Try setting the year back by one year.
// today.setFullYear( today.getFullYear()  - 1 )
// console.log( today );