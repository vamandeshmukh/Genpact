/**
 * Function can take more than, or even less than the number of arguments specified in the function declaration
 * If extra arguments are passed, they can be considered as ignored (we shall see more details later).
 */

function sum( a, b ) {
    return a + b;
}

// extra arguments passed
// Third argument is ignored by sum() in each case
console.log( sum( 1, 2, 3 ) );
console.log( sum( 'hello', ' world', ' of Pandora' ) );