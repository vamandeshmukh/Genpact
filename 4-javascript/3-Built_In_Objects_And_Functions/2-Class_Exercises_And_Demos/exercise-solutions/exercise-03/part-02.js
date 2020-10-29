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
    ]
};

console.log( typeof john );

console.log( typeof john.name );
console.log( typeof john.location );
console.log( typeof john.emailid );
console.log( typeof john.phoneNumber );
console.log( typeof john.projects );

console.log( john.emailid );
john.emailid = 'john.doe@gmail.com';
console.log( john.emailid );

console.log( john.projects[0].duration );
john.projects[0].duration = 2000;
console.log( john.projects[0].duration );

delete john.location;
console.log( john );