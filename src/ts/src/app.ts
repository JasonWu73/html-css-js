const add = (
  numberOne: number,
  numberTwo: number = 100): number => numberOne + numberTwo;

const printOutput = (output: number | string) => console.log(output);

const buttonElement = document.querySelector('button');
if (buttonElement) {
  buttonElement.addEventListener('click', (event) => {
    console.log(event.target);
    printOutput(add(0.1, 0.9));
  });
}

console.log(add(1));

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
