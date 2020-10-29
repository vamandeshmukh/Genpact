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

function transform( f, g ) {
    for( var i = 2, argsForF = []; i < arguments.length; i++ ) {
        argsForF.push( g( arguments[i] ) );
    }

    return f.apply( null, argsForF );
}

console.log( transform( sum, square, 3, 8, 6 ) );
console.log( transform( sum, cube, 3, 8, 6 ) );
