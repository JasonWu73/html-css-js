class Person {

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  printPersonData() {
    console.log(`Name is ${this.name}, age is ${this.age}`)
  }
}

const person = new Person('Jason Wu', 25);
person.printPersonData();
