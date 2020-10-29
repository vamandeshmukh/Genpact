function sum( /* number1, number2, ... */ ) {
    for( var i = 0, sum = 0; i < arguments.length; i++ ) {
        sum += arguments[i];
    }

    return sum;
}

function square( x ) {
    return x * x;
}

function cube( x ) {
    return x * x * x;
}

function transform( f, g, cb ) {
    for( var i = 3, argsForF = []; i < arguments.length; i++ ) {
        argsForF.push( g( arguments[i] ) );
    }

    cb( f.apply( null, argsForF ) );
}

function logResult( result ) {
    console.log( result );
}

transform( sum, square, logResult, 3, 8, 6 );
transform( sum, cube, logResult, 3, 8, 6 );
