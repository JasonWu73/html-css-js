const nums = [1, 2, 3];
const [a, , c] = nums;
console.log(a, c);

console.log('=====================');

const person = {
  name: 'Jason Wu',
  hobby: 'Coding',
  age: 25
};

const {name, age} = person;
console.log(`name=${name}, age=${age}`);
