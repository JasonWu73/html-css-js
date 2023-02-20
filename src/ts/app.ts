let someVal: undefined;
console.log(someVal);
someVal = null;
console.log(someVal);

printResult(add(1, 1.9));

function printResult3(num: number): void {
  console.log(`Result: ${num}`);
  return;
}

function printResult2(num: number): undefined {
  console.log(`Result: ${num}`);
  return;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}
