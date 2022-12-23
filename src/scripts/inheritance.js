class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }

  print() {
    super.print();
    console.log(`Company: ${this.company}`);
  }
}

const employee = new Employee("Bob", 20, "Google");

employee.print();
