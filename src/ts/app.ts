// 0, 1, 2
// enum Role {ADMIN, READ_ONLY}

// enum Role {ADMIN = 10, READ_ONLY = 100}

enum Role {ADMIN = 'admin', READ_ONLY = 100}

const person = {
  name: 'Jason Wu',
  age: 25,
  hobbies: ['Game', 'Coding'],
  role: Role.ADMIN
};

if (person.role === Role.READ_ONLY) {
  console.log(`${person.name} is read only!`);
} else {
  console.log(`${person.name} can read and write.`);
}
