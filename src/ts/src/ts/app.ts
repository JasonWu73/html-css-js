import '../css/style.css';

function Logger(constructor: Function) {
  console.log('Logging...')
  console.log('constructor: ', constructor);
}

@Logger
class Person {
  name = 'Jason';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);
