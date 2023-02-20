// object type
const person: {
  name: string,
  age: number,
  hobbies: string[] // array type
} = {
  name: 'Jason Wu',
  age: 25,
  hobbies: ['Game', 'Coding']
};

person.hobbies.forEach(hobby => {
  console.log(hobby.toUpperCase());
});

let persons: {name: string, age: number}[];
persons = [person];

persons.forEach(person => {
  console.log(person.name)
});
