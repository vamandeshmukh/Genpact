// some more instance methods
var notes = ['Sa', 'Re', 'Ga', 'Ma'];

// concat() is used to concatenate 2 arrays into one. The items of the calling array are followed by the items of the passed array and a new array is returned.
// [Calling array NOT modified] 
var concatenatedNotes = notes.concat( ['Pa', 'Da', 'Ni'] );
console.log( '** After concat() ***' );
console.log( notes );
console.log( concatenatedNotes );

// reverse(), reverses the item order and returns the array
// [Calling array modified]
var reversedNotes = notes.reverse();
console.log( '** After reverse() ***' );
console.log( notes );
console.log( reversedNotes );
console.log( notes === reversedNotes );

// sort() can be used to sort an array. It too returns the array.
// [Calling array modified]
console.log( '** After sort() ***' );
var sortedNotes = notes.sort();
console.log( notes );
console.log( sortedNotes );
console.log( notes === sortedNotes );

// problem with sorting numbers - even here alphabetical order is followed
var numbers = [ 5, 20, 15, 10, 45, 30, 300, 80, 50, 8 ];
numbers.sort();
console.log( numbers );

numbers.sort(function( x, y ) {
    return x - y;
});

// indexOf()
// which note is Pa in concatenatedNotes? which note is Ki?
console.log( '*** indexOf() ***' );
console.log( concatenatedNotes.indexOf( 'Pa' ) );	// index is 4
console.log( concatenatedNotes.indexOf( 'Ki' ) );	// since there is no such note, indexOf returns -1

// join() creates a comma-separated string of string representations of array items. The delimiter (comma) is customizable (pass a string argument)
// let's "sing" all of the notes together
console.log( '*** join() ***' );
console.log( concatenatedNotes.join() );
console.log( concatenatedNotes.join( ' - ' ) );