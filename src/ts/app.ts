// object type
const person: {
  name: string,
  age: number,
  hobbies: string[], // array type
  roles: [number, string] // tuple
} = {
  name: 'Jason Wu',
  age: 25,
  hobbies: ['Game', 'Coding'],
  roles: [2, 'author']
};

// error
// person.roles = [1, 'Coder', 'Dev'];

person.roles.push('Tester');
person.roles[1] = 'Admin';
console.log(person);
