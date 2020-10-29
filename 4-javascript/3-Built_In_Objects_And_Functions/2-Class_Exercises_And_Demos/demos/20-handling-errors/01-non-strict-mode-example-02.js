function Person( name, age ) {
    this.name = name;
    this.age = age;
}

var john = Person( 'john', 30 ); // we forgot to call with the new operator - the Person function's context (this) is the window object and name and age properties get added to the window object