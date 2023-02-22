// type guard
type numberOrString = number | string;
type numeric = number | boolean;
type combined = numberOrString | numeric;

const add = (a: combined, b: combined): number | string => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return +a + +b;
};

console.log('add(\'1\', 1): ', add('1', 1));
console.log('add(1, false)', add(1, false));
console.log('add(1, true)', add(1, true));

interface Animal {
  name: string;
}

interface People {
  gender: string;
}

type Account = Animal | People;

class MyAnimal implements Animal {

  constructor(public name: string) {
  }
}

class MyPeople implements People {

  constructor(public gender: string) {
  }
}

const printUserInfo = (user: Account): void => {
  // in keyword can check if object property exists
  // if ('name' in user) {
  //   console.log(`Name: ${user.name}`);
  // }
  //
  // if ('gender' in user) {
  //   console.log(`Gender: ${user.gender}`);
  // }

  // instance keyword also can check if object property exists
  if (user instanceof MyAnimal) {
    console.log(`Name: ${user.name}`);
  }

  if (user instanceof MyPeople) {
    console.log(`Gender: ${user.gender}`);
  }
}

// printUserInfo({name: 'Jason'});
// printUserInfo({gender: 'female'});

printUserInfo(new MyAnimal('Cat'));
printUserInfo(new MyPeople('Male'))
