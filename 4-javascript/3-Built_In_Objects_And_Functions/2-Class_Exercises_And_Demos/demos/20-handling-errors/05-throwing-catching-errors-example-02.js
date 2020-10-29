// Case 2: Exception thrown inside a function and caught in caller
function foo() {
    throw new Error( 'Custom error' );
    console.log( 'After custom error' );	// this statement is not executed
    return 'no exception';	// nor is this
}

try {
    foo();
} catch ( e ) {
    console.log( '[Exception occured in foo and caught in catch block]', e );
}