/**
 * Date class objects are used to work with dates in JavaScript
 * Creating date objects
 * Note: Jan - Dec are numbered 0 - 11 in JavaScript (though not in standard date string formats)
 */

var today = new Date();
console.log( today );

// year, month (Jan = 0, Feb = 1, ..., Dec = 11), date, hours, minutes, seconds, milliseconds
var newYear2018 = new Date(2018, 0, 1, 0, 0, 0, 0);
console.log( newYear2018 );

// Exercise: create a date representing your birthday