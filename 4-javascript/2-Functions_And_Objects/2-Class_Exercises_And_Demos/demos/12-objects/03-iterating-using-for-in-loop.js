/**
 * The for..in loop can be used to iterate through an object's properties. The for..in loop is supported in old versions of JS.
 * Only 'enumerable' properties of an object will be listed. In the example below, all properties are enumerable. Non-enumerable properties are beyond the scope of the course.
 * Usually, the for..in loop is used in conjunction with Object.hasOwnProperty() to take action on only an object's 'own' properties. This is beyond the scope of this course.
 * Alternatively, in ES5+, Object.keys() can be used to get an array of properties and the object can be iterated through. The keys in this case are only an object's own properties. So the Object.hasOwnProperty() check is not required.
*/

var blockbusterMovie = {
    name: 'Kalank',
    rating: {
        critics: 3.2,
        public: 4.3
    },
    showTimings: ['13:00', '16:00', '19:00'],
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

// the for..in variable will be assigned the object's property names iteratively.
for( var prop in blockbusterMovie ) {
    // Usually the Object.hasOwnProperty() method check is made here. We skip it for now.
    console.log( 'The value of property ' + prop + ' is ', blockbusterMovie[prop] );
}

// Alternatively, use Object.keys() to get hold of the properties.
var props = Object.keys(blockbusterMovie);
for( var i = 0; i < props.length; i++ ) {
    console.log( 'The value of property ' + props[i] + ' is ', blockbusterMovie[props[i]] );
}