// Looping using for
var myKannadaVocabulary = ['Beku', 'Beda', 'Gothu', 'Kannada gothilla', 'Yen Maga', 'Adjust maadi', 'Enjoy maadi', 'Tumba jaasthi'];

// it is a good practice to store the length of array in a separate variable for better performance
// Try it: Find out the scope of the variables declared in the for loop
for( var wordIndex = 0, howManyWordsIKnow = myKannadaVocabulary.length; wordIndex < howManyWordsIKnow; wordIndex++ ) {
    console.log( myKannadaVocabulary[wordIndex] );
}