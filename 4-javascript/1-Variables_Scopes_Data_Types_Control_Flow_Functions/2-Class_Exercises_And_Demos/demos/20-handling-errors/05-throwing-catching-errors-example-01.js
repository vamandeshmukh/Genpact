/**
 * In case of application errors, throw is used to terminate execution of currently executing block and pass control to the one nearest block in the call stack capable of handling the thrown exception
 */

// Case 1: Exception thrown inside a try block
try {
    throw new Error( 'Custom error' );
} catch ( e ) {
    console.log( '[Exception occured and caught in catch block]', e );
}