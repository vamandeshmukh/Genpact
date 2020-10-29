/**
 * Of course, the generated objects can have methods too
 */

function MovieCharacter( movie, name, actor, punchDialogue, accomplices ) {
    this.movie = movie;
    this.name = name;
    this.actor = actor;
    this.punchDialogue = punchDialogue;
    this.accomplices = accomplices || [];

    this.sayPunchDialogue = function() {
        console.log( this.name + ' said ' + this.punchDialogue );
    };
    
    this.addAccomplice = function( accomplice ) {
        // array objects have a push() method that can be used to add an item to the end of the array
        this.accomplices.push( accomplice );
    };
    
    this.getAccomplices = function() {
        return this.accomplices;
    };
}

var gabbar = new MovieCharacter( 'Sholay', 'Gabbar Singh', 'Amjad Khan', 'Kitney aadmi they?' );
gabbar.sayPunchDialogue();

gabbar.addAccomplice( 'Kaalia' );
gabbar.addAccomplice( 'Sambha' );
console.log( gabbar.getAccomplices() );