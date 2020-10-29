var quote = 'With great power comes great responsibility';
var proverb = "My mom says, \"An apple a day keeps the doctor away\""; // escaping double quotes within a double quoted string

console.log( quote );
console.log( proverb );

// 43 51
console.log( quote.length, proverb.length );

// r l
console.log( quote[6], proverb.charAt( 20 ) ); // character numbering starts from 0