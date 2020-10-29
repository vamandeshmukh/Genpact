/**
 * Branching and looping uses constructs similar to languages like C/C++/Java
 * After the lesson in Spanish, here is a short guide to using Kannada and surviving in Bengaluru
 */

// Branching using if, if..else, and if..else if..else
var myKannadaVocabulary = ['Beku', 'Beda', 'Gothu', 'Kannada gothilla'];
/**
 * Psst...
 * Add 'Yen Maga', 'Adjust maadi', 'Enjoy maadi' and 'Tumba jaasthi' to be elevated to the level of Seeker
 * To go Pro, add 'Loafer', Chitranna', 'Mosranna', 'Bisi Bele Bhath'
 */

var howManyWordsIKnow = myKannadaVocabulary.length;
if( howManyWordsIKnow <= 4 ) {
    console.log( '[Badge: Newbie] Sorry dude! You have a long way to go' );
} else if( howManyWordsIKnow > 4 && howManyWordsIKnow <= 8 ) {
    console.log( '[Badge: Seeker] Cool! You have made much progress' );
} else {
    console.log( '[Badge: Pro] You have settled in Bengaluru and are one among the locals. Help others by teaching them the city\'s lingo' );
}