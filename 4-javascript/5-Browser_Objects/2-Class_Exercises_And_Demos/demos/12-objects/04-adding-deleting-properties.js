/**
 * Unlike most languages, properties and methods can be freely added and removed at runtime in JS
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

// add a property 'cast'
blockbusterMovie.cast = [
    'Madhuri Dixit',
    'Sanjay Dutt',
    'Alia Bhatt',
    'Varun Dhawan'
];
console.log( blockbusterMovie.cast );
blockbusterMovie.cast[blockbusterMovie.cast.length] = 'Sonakshi Sinha';
console.log( blockbusterMovie.cast );

// remove the property 'showTimings'
console.log( blockbusterMovie.showTimings );
delete blockbusterMovie.showTimings;
console.log( blockbusterMovie.showTimings ); // trying to access an unknown property evaluates to the special value undefined

// adding or removing a function is not something special
blockbusterMovie.cancelBooking = function( timing, seats ) {
    this.bookings[timing].seatsLeft += seats;
    console.log( this.bookings[timing].seatsLeft + ' seats remaining for show at ' + timing );
}

blockbusterMovie.cancelBooking( '13:00', 5 );

// Try it - remove a method and then try to call it