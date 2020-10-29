function average( /* number1, number2, ... */ ) {
    for( var i = 0, sum = 0; i < arguments.length; i++ ) {
        sum += arguments[i];
    }

    return sum / arguments.length;
}

console.log( average( 10, 30, 20, 70, 60, 50 ) );