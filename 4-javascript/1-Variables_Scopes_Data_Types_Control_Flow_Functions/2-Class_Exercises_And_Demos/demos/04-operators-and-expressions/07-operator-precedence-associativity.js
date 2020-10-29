/**
 * Usual rules of operator precedence exist
 * Most operations are evaluated left to right
 *
 * Expressions within parenthesis are evaluated earliest
 * Unary operators like !, ++, -- get preference and are evaluated first
 * Multiplication and division and evaluated before addition and subtraction.
 * Relational and binary logical operators get lower preference
 *
 * Tip: When in doubt regarding order of evaluation of parts of an expression, use parentheses to make sure they happen in the order you intend
*/

var a = 6;

/**
 * Steps in evaluation
 * 1 + 2 - 3 * 4 / 5 + ++a
 * 1 + 2 - 3 * 4 / 5 + a where a = 7
 * 1 + 2 - 3 * 4 / 5 + 7
 * 1 + 2 - 12 / 5 + 7
 * 1 + 2 - 2.4 + 7
 * 3 - 2.4 + 7
 * 0.6 + 7
 * 7.6
*/
var result = 1 + 2 - 3 * 4 / 5 + ++a;

console.log( result );