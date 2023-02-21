const add = (
  numberOne: number,
  numberTwo: number): number => numberOne + numberTwo;

console.log(add(0.1, 0.9));

const printOutput = (output: number | string) => console.log(output);
printOutput(add(0.1, 0.9));

const buttonElement = document.querySelector('button');
if (buttonElement) {
  buttonElement.addEventListener('click', (event) => {
    console.log(event.target);
  });
}

/*
const age = 25;

if (age > 18) {
  // let, const: function, global, block scope
  // var: function, global
  let ok = true;
  console.log(ok);
}

console.log(ok)
*/
