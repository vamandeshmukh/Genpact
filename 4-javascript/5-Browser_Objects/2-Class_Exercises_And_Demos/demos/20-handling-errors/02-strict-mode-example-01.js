/**
 * ES5 introduced a strict mode of script execution.
 * The strict mode helps prevent unintentional bugs in code
 * Strict-mode code throws errors on certain pieces of code that silently fail or potentially introduce bugs
 */

/**
 * Strict mode is enforced at the level of a scope.
 * a statement consisting of the string 'use strict' is to be placed on top of a scope.
 * [Global strict execution] If you want all code to be executed strictly, apply 'use strict' globally (on top of script),
 * [Function-scoped strict execution] Else add it at the top of the function which is to be executed under strict mode
 */

'use strict';
var dreadedError = 'Error, no keyboard. Press F1 to continue.';

// try to reset error message - throws error and stops script execution
dreadederror = 'Ok, you can can click your mouse button too';

console.log( dreadedError ); // oops! we made some mistake...ah, the E in dreadedError is in caps