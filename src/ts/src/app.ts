interface Animal {
  sex?: string;

  makeNoise?(): void;
}

class Cat implements Animal {
}

const add = (numberOne: number, numberTwo?: number): number => {
  if (numberTwo) {
    return numberOne + numberTwo;
  }

  return numberOne;
};

console.log(add(1));

const addDefaultSecondParameter = (
  numberOne: number,
  numberTwo: number = 0
): number => {
  return numberOne + numberTwo;
};

console.log(addDefaultSecondParameter(1));
