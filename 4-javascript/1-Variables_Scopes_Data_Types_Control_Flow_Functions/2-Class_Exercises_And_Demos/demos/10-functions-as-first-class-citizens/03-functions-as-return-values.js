/*
 * Functions being first-class citizens in JS, can also be returned from other functions.
 */

function transform( transformation ) {
    function square( n ) { return n * n; };

    switch( transformation ) {
        case 'square':
            return square;
        case 'cube':
            return function( n ) { return n * n * n; };
        default:
            return function( n ) { return n; }
    }
}

var fn = transform( 'square' );
console.log( fn( 4 ) );

fn = transform( 'cube' );
console.log( fn( 5 ) );

fn = transform( 'xyz' );
console.log( fn( 6 ) ); // logs 6