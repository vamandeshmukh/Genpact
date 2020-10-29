function Employee( name, location, emailid, phoneNumber, projects ) {
    'use strict';
    
    this.name = name;
    this.location = location;
    this.emailid = emailid;
    this.phoneNumber = phoneNumber;
    
    if( projects.length === 0 ) {
        throw new Error( 'employee should have at least one assigned project' );
    }

    this.projects = projects;

    this.getProject = function( projectName ) {
        for( var i = 0, matchedProject = null; i < this.projects.length; i++ ) {
            if( this.projects[i].name === projectName ) {
                matchedProject = this.projects[i];
                break;
            }
        }

        return matchedProject;
    };
}

try {
    var john = new Employee( 'John Doe', 'Bangalore', 'john.doe@exmple.com', 9876543210, [] );
} catch( error ) {
    console.log( error.message );
}