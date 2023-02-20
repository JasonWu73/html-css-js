const add = (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) => {
  const sum = n1 + n2;
  if (showResult) {
    console.log(`${phrase} ${sum}`);
  }

  return sum;
};

// let num1 = 0.1;
// let num1: string = 0.1;
let num1: number;
num1 = 12;
const num2 = 0.9;
const printResult = true;
let resultPhrase = 'The result is:';
resultPhrase = 0;
add(num1, num2, printResult, resultPhrase);

console.log('==========')

const num = 1.32;
const str = 'hello';
const bool = false;
console.log(`typeof ${num}: ${typeof num}`);
console.log(`typeof ${str}: ${typeof str}`);
console.log(`typeof ${bool}: ${typeof bool}`);
