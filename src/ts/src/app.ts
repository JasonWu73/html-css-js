interface Animal {
  name: string,
  sex: string,
  maxAge: number

  makeNoise(phrase: string): void
}

const dog: Animal = {
  name: 'George',
  sex: 'male',
  maxAge: 20,
  makeNoise(phrase: string) {
    console.log(`Make Noise: ${phrase}`)
  }
};

dog.makeNoise('woof !!!');
