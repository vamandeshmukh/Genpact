/**
 * A function can also be set as value of an object's property (remember, function is an object is JS). Such a function is termed as a 'method' of the object.
 * Sometimes the term 'property' is used solely to mean properties whose values are not functions, and method is used exclusively for function-valued properties.
 */

var blockbusterMovie = {
    name: 'Kalank',
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
    },
    // the function context (this) for a method refers to the object to which it belongs
    bookSeats: function( timing, seats ) {
        if( this.bookings[timing].seatsLeft < seats ) {
            console.log( 'Not enough seats available' );
            return false;
        } else {
            this.bookings[timing].seatsLeft -= seats;
            console.log( 'Booked ' + seats + ' seat(s)' );
            console.log( this.bookings[timing].seatsLeft + ' seats left' );
            return true;
        }
    }
};

if( !blockbusterMovie.bookSeats( '13:00', 3 ) ) {
    blockbusterMovie.bookSeats( '16:00', 3 );
}
blockbusterMovie.bookSeats( '16:00', 5 );