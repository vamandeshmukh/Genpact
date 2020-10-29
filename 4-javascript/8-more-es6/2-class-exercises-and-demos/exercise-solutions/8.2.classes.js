class Person {
  constructor(name) {
    this.name = name;
  }

  showDetails() {
    console.log('Person Details');
    console.log('  Name:', this.name);
  }
}

class Employee extends Person {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  showDetails() {
    console.log('Employee Details');
    console.log('  Name:', this.name);
    console.log('  Department:', this.department);
  }
}

const p = new Person('Hari');
p.showDetails();

const e = new Employee('Ram', 'IT Services');
e.showDetails();
