/**
 * The object literal syntax to declare objects
 *
 * Objects are simply a collection of key-value pairs in JS
 * They are used to store information related in some way
 * For example, the details of a movie.
 * In some languages they are also known as associative arrays
 *
 * Keys are strings and values can be of any valid JS data types - this includes objects and functions
 */

var blockbusterMovie = {
    // properties with a usual identifier need not be quoted
    name: 'Kalank',
    // properties that are not valid identifiers need to be quoted
    'currently-showing': true,
    rating: {
        critics: 3.2,
        public: 4.3
    },
    showTimings: ['13:00', '16:00', '19:00'],
    bookings: {
        '13:00': {
            screen: 1,
            seatsLeft: 2
        },
        '16:00': {
            screen: 2,
            seatsLeft: 20
        },
        '19:00': {
            screen: 1,
            seatsLeft: 95
        }
    }
};

// Use the '.' operator to access properties
console.log( 'Name : ', blockbusterMovie.name );

// To access properties with names that are not valid identifier names use the [] operator (even rest of properties like name, rating can be accessed this way)
console.log( 'Is currently showing? ', blockbusterMovie['currently-showing'] );

// accessing properties in sub-object
console.log( 'Rating by viewers : ', blockbusterMovie.rating.public );
console.log( 'Seats left in 13:00 show : ', blockbusterMovie.bookings['13:00']['seatsLeft'] );

// accessing a property whose value is an array
console.log( 'First show timing : ', blockbusterMovie.showTimings[0] );
console.log( 'Number of shows : ', blockbusterMovie.showTimings.length );