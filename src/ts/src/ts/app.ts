import '../css/style.css';

function Logger(logMessage: string) {
  return (constructor: Function) => {
    console.log(logMessage);
    console.log('constructor: ', constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Jason';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);
