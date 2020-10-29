function adder( x ) {
    return function( y ) {
        return x + y;
    }
}

var adder10 = adder( 10 );
console.log( adder10( 20 ) );
console.log( adder10( 30 ) );

var adder50 = adder( 50 );
console.log( adder50( 20 ) );
console.log( adder50( 30 ) );