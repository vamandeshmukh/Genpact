var numbers = [ 10, 30, 20, 70, 60, 50 ];

for( var i = 1, max = numbers[0]; i < numbers.length; i++ ) { // assume there is at least one number in the array
    if( numbers[i] > max ) {
        max = numbers[i]
    }
}

console.log( max );

var sum = 0, j = 0;
while( j < numbers.length ) {
    sum += numbers[j++];
}

console.log( sum );