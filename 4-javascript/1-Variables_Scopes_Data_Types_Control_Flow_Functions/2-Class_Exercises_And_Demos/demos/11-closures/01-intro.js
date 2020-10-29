/**
 * Closure
 * A closure in JS is the set of all variables accessible in a particular scope.
 * Since only a function creates a new scope for variables, defining a function creates a new closure.
 *
 * JS allows functions to be defined within other functions (either declared normally of created as a function expression)
 * (We saw this when creating functions and returning them, and also in the section on scopes)
 *
 * If an inner function is returned (or part of a returned value), the closure created by it will be kept alive.
 * This implies the outer functions' variables etc. will not be garbage collected and still be accessible to the inner function
 */

/**
 * Generates functions that calculate a number to a given power
 *
 * @param {number} power Power to which number is to be raised by the generated function.
 * @returns {function} A function that when passed a number, returns the number raised to the the given power
 */
function powerFactory(power) {
    // power is a variable local to the enclosing function (powerFactory)
    
    // power will be accessible to this inner function and shall be kept alive after this inner function is returned via a call to powerFactory
    return function (number) {
        return Math.pow(number, power);
    };
}

var fourAndAHalfPower = powerFactory(4.5);

// Observe that due to its closure, we can say fourAndAHalfPower 'remembers' the value of power variable at the time fourAndAHalfPower was created - Closures thus lend a 'memory' to a function
console.log(fourAndAHalfPower(2));

var tenPower = powerFactory(10);
console.log(tenPower(2));