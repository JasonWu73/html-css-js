interface Animal {
  readonly sex: string;

  makeNoise(phrase: string): void
}

interface Named {
  readonly name: string;
}

interface Person extends Animal, Named {
  phoneNumber: string;
}

class User implements Person {

  constructor(
    public name: string,
    public sex: string,
    public phoneNumber: string
  ) {
  }

  makeNoise(phrase: string): void {
    console.log(`I'm ${this.name} (${this.sex}): ${phrase}`);
  }
}

const user = new User('Jason', 'male', '18157186682');
user.makeNoise('Hello');
console.log(user);

user.name = 'Jack';
console.log(user);
