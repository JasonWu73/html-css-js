type addFunction = (numberOne: number, numberTwo: number) => number;

let add: addFunction;

// interface AddFunction {
//   (numberOne: number, numberTwo: number): number;
// }
//
// let add: AddFunction;

add = (numberOne: number, numberTwo: number): number => {
  return numberOne + numberTwo;
}

console.log(add(1, 2));
