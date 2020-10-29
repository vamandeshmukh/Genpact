/**
 * switch..case accepts strings as expressions unlike many languages.
 * Otherwise it is similar to that in languages like C/C++/Java
 */

var interest = 'historical places';
var place;

switch( interest ) {
    case 'fun':
        place = 'Goa';
        break;	// don't forget the break. You don't want to end up on Nandi hills for every weekend break!
    case 'historical places':
        place = 'Hampi';
        break;
    case 'nature':
        place = 'Madikeri';
        break;
    default:
        place = 'Nandi hills'; // Did we hear you say, "Oh give me a break! is this the only place near Bangalore?"
}

console.log( place );