function Employee( name, location, emailid, phoneNumber, projects ) {
    this.name = name;
    this.location = location;
    this.emailid = emailid;
    this.phoneNumber = phoneNumber;
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

var john = new Employee( 'John Doe', 'Bangalore', 'john.doe@exmple.com', 9876543210, [
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
]);

var mary = new Employee( 'Mary Doe', 'Bangalore', 'mary.doe@exmple.com', 8765432109, [
    {
        name: 'Apple store app',
        duration: 1500,
        effortPerWeek: 30,
        billingRate: 85
    },
    {
        name: 'Workflow tool',
        duration: 800,
        effortPerWeek: 10,
        billingRate: 70
    }
]);

console.log( john.getProject( 'Intranet menu changes' ) );
console.log( mary.getProject( 'Workflow tool' ) );