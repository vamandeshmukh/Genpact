/**
 * Classes & the Constructor Function
 * JS has no separate class construct (ES6+ provides it though)
 * Functions can be used to instantiate objects with similar properties and methods
 * Such a function is called with the 'new' operator and is called a constructor function
 */

// There is nothing special about the constructor function except that, since it gets called with the new operator, the context of the function is set to the newly created object
function MovieCharacter( movie, name, actor, punchDialogue, accomplices ) {
    this.movie = movie;
    this.name = name;
    this.actor = actor;
    this.punchDialogue = punchDialogue;
    this.accomplices = accomplices || [];
    
    // Even though no return statement is encountered, a function called with the new operator, automatically returns the function context
    // return this;	// default return statement
}

// A new object is created at this point and passed to the function as its context. We hold the newly created object in a variable
var gabbar = new MovieCharacter( 'Sholay', 'Gabbar Singh', 'Amjad Khan', 'Kitney aadmi they?' );

var veeru = new MovieCharacter( 'Sholay', 'Veeru', 'Dharmendra', 'Basanti in kutto ke samne mat nachna' );

console.log( gabbar.name + ' said ' + gabbar.punchDialogue );
console.log( veeru.name + ' said ' + veeru.punchDialogue );