/**
 * Array provides a set of instance methods helpful in many instances where we need to iterate through the items
 * These are supported in ES5+
 * The iteration is done using an iterator function passed as argument to these methods.
 * The iteration starts from index 0 (for most methods)
 * The iterator function usually accepts 3 arguments
 * 		1. array item processed in current iteration
 * 		2. index of the item
 * 		3. array itself
 * Try this - Many of these methods accept another argument to set the context of the iterator method. You can verify this.
 */

var rahmanHits = [
    { song: 'Dil hai chota sa', movie: 'Roja', year: 1992, dubbed: true },
    { song: 'Humma humma', movie: 'Bombay', year: 1995, dubbed: true },
    { song: 'Tanha Tanha', movie: 'Rangeela', year: 1995, dubbed: false, remake: false },
    { song: 'Ishq Bina', movie: 'Taal', year: 1999, dubbed: false, remake: false },
    { song: 'Saathiya', movie: 'Saathiya', year: 2002, remake: true },
    { song: 'Khuda Hafiz', movie: 'Yuva', year: 2004, remake: true }
];

rahmanHits.forEach(function( item, index, array ) {
    console.log( index + ')', ' Song : ', item.song, 'Movie: ', item.movie );
});

var isDubbedOrRemake = rahmanHits.every(function( item, index, array ) {
    return item.dubbed || item.remake;
});
console.log( 'Is every movie either dubbed or remake? ', isDubbedOrRemake );

// Exercise: use every to find out if every movie has year of release before 2005
// ...

// is there some movie that was released in 1999?
var is1999Release = rahmanHits.some(function( item ) {
    return item.year === 1999;
});
console.log( 'Do we have at least one movie released in 1999? ', is1999Release );

// find first movie in the array that was released after 1996
var firstMovieAfter1996 = rahmanHits.find(function( item ) {
    return item.year > 1996;
});
console.log( 'First movie released after 1996 is ', firstMovieAfter1996 );

// find all movies that were dubbed, i.e. dubbed is true
var dubbedMovies = rahmanHits.filter(function( item ) {
    return item.dubbed === true;
});
console.log( 'List of movie that were dubbed is ', dubbedMovies );

// generate list of strings in the form <song> from <movie>
var songsArray = rahmanHits.map(function( item ) {
    return item.song + ' from ' + item.movie; 
});
console.log( 'List of songs : ', songsArray );