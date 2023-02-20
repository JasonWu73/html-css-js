// let myFunc: Function;
let myFunc: (a: number, b: number) => number;
myFunc = add;
// myFunc = printResult;
// myFunc = 1;
console.log(myFunc(1, 2));

function printResult(num: number) {
  console.log(`Result: ${num}`);
}

function add(num1: number, num2: number) {
  return num1 + num2;
}
