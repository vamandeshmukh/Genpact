var john = {
    name: 'John Doe',
    location: 'Bangalore',
    emailid: 'john.doe@exmple.com',
    phoneNumber: 9876543210,
    projects: [
        {
            name: 'Apple store app',
            duration: 1500,
            effortPerWeek: 20,
            billingRate: 85
        },
        {
            name: 'Intranet menu changes',
            duration: 300,
            effortPerWeek: 10,
            billingRate: 50
        }
    ],
    getProject: function( projectName ) {
        for( var i = 0, matchedProject = null; i < this.projects.length; i++ ) {
            if( this.projects[i].name === projectName ) {
                matchedProject = this.projects[i];
                break;
            }
        }

        return matchedProject;
    }
};

console.log( john.getProject( 'Intranet menu changes' ) ); // prints matched project details
console.log( john.getProject( 'SEO for web app' ) ); // null