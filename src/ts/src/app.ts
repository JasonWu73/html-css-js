// intersection type
type numberOrString = number | string;
type stringOrBoolean = string | boolean;
type combined = numberOrString & stringOrBoolean;

let variable: combined;

variable = '';
// variable = false; // error
// variable = 100; // error

interface Animal {
  name: string;
}

interface People {
  gender: string;
}

type AccountUser = Animal & People;

let user: AccountUser;

user = {
  name: 'Jason',
  gender: 'male'
};

console.log(user);
