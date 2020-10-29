/**
* instanceof operator is used to test if an object is of a particular type (i.e. an instance of some class)
* Arrays are for example objects of the type Array in JS
* Later we shall see more types of classes
*/

console.log( ["Tyrion", "Jaime", "Cersei", "Daenerys"] instanceof Array ); // arrays are instances of the Array class
console.log( ["Tyrion", "Jaime", "Cersei", "Daenerys"] instanceof Object ); // The Array class inherits from the Object class