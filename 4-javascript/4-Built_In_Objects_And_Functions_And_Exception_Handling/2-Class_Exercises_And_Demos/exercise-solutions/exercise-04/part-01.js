var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

days.unshift( 'Sunday' );
days.push( 'Saturday' );

console.log( days );

days.splice( 2, 2 );

console.log( days );

console.log( days.indexOf( 'Wednesday' ) );
console.log( days.indexOf( 'Friday' ) );