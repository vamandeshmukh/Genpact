function average( numbers ) {
    for( var i = 0, sum = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

console.log( average( [ 10, 30, 20, 70, 60, 50 ] ) );