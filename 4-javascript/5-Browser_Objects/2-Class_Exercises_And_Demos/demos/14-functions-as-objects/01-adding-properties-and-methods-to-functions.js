/*
    Functions are also objects in JavaScript. Consequently, properties and methods can be added to a function too. When added to a constructor function, these properties and methods serve roughly as equivalents to static members and methods in a traditional OOP language.
*/
function Person( name, age, city ) {
    this.name = name;
    this.age = age;

    // Step 1.2: Use the Person.defaults.city to set up the default value in case city is not passed (set as city property)
    this.city = city || Person.defaults.city;
}

// Step 1.1: Add property 'defaults' which is an object with property 'city' set to 'Bangalore'
// You can add a property to a function
Person.defaults = {
    city: 'Bangalore'
};

var john = new Person( 'John', 32 );
var jenny = new Person( 'Jenny', 28, 'New Delhi' );

console.log( john );
console.log( jenny );