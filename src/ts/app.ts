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

const num1 = 0.1;
const num2 = 0.9;
const printResult = true;
const resultPhrase = 'The result is:';
add(num1, num2, printResult, resultPhrase);

console.log('==========')

const num = 1.32;
const str = 'hello';
const bool = false;
console.log(`typeof ${num}: ${typeof num}`);
console.log(`typeof ${str}: ${typeof str}`);
console.log(`typeof ${bool}: ${typeof bool}`);
