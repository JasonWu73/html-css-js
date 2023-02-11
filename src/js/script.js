const nums = [2, 3, 4];
const newNums = [...nums, 5];
console.log(newNums);

console.log('------------------');

const person = {
  name: 'Jason'
};
const newPerson = {
  ...person,
  age: 25
};

console.log(newPerson);

console.log('------------------');

const filterEvenNum = (...args) => args.filter(num => num % 2 === 0);
console.log(filterEvenNum(1, 2, 3, 4, 5));
