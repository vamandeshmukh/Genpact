/**
 * The Error class
 * Objects of the Error class and its subclasses are thrown when runtime errors occur.
 * These can be caught and handled by the script so that script execution can continue if possible, or the error handled in a more user-friendly way.
 */

// the string passed is set as the error message
var customError = new Error( 'A custom error object' );

// properties of an Error object - name, message
console.log( 'customError.name =', customError.name );	// type of error object (Error)
console.log( 'customError.message =', customError.message );