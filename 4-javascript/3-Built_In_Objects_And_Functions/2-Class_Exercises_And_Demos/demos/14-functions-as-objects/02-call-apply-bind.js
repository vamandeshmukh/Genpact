function foo( x, y ) {
    console.log( this );
    console.log( x, y );
}

foo( 10, 20 );
foo.call( { a : 1 }, 10, 20 );
foo.apply( { a : 1 }, [ 10, 20 ] );

var boundFoo = foo.bind( { a: 1 }, 10 );
boundFoo( 20 );
boundFoo( 30 );