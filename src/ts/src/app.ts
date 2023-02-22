interface Animal {
  readonly sex: string;

  makeNoise(phrase: string): void
}

class Cat implements Animal {

  constructor(public sex: string) {}

  makeNoise(phrase: string): void {
    console.log(`Meow: ${phrase}`);
  }
}

let cat: Animal;

cat = {
  sex: 'male',
  makeNoise(phrase: string) {
    console.log(phrase);
  }
};

cat.sex = 'female';

cat = new Cat('female');
cat.makeNoise('I am cat queen');
