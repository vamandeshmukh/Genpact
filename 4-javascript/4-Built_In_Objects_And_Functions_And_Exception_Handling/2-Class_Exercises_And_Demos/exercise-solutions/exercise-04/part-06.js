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

var sita = new Employee( 'Sita Pillai', 'Bangalore', 'sita.pillai@exmple.com', 7654321098, [
    {
        name: 'Workflow tool',
        duration: 1500,
        effortPerWeek: 40,
        billingRate: 85
    }
]);

var ram = new Employee( 'Ram Pillai', 'Bangalore', 'ram.pillai@exmple.com', 6543210987, [
    {
        name: 'Apple store app',
        duration: 1500,
        effortPerWeek: 20,
        billingRate: 85
    },
    {
        name: 'CMS',
        duration: 1000,
        effortPerWeek: 20,
        billingRate: 50
    }
]);

var aslam = new Employee( 'Aslam Mohammad', 'Bangalore', 'aslam.mohammad@exmple.com', 5432109876, [
    {
        name: 'CMS',
        duration: 1000,
        effortPerWeek: 40,
        billingRate: 50
    }
]);

var employees = [ john, mary, sita, ram, aslam ];

var employeesJson = JSON.stringify( employees, null, 4 );

console.log( employeesJson );