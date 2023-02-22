// another generic function
interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(value: T): [T, string] {
  const length = value.length;

  if (length < 0) {
    return [value, 'Got no elements.'];
  }

  if (length === 1) {
    return [value, 'Got 1 elements.'];
  }

  if (length > 0) {
    return [value, `Got ${length} elements.`];
  }

  return [value, 'Got no element.'];
}

const [value, description] = countAndDescribe(['a', 'b']);
console.log(description, ':',value);

// ========================================

// generic constraints
/*
function merge<T extends object, U extends object>(
  objectOne: T,
  objectTwo: U
): T & U {
  return Object.assign({}, objectOne, objectTwo);
}

// const merged = merge(
//   {name: 'Jason', hobbies: ['Coding']},
//   {age: 25}
// );
const merged = merge(
  {name: 'Jason', hobbies: ['Coding']},
  25
);
console.log('merged:', merged);
*/

// ========================================

// create generic function
/*
function merge<T, U>(objectOne: T, objectTwo: U): T & U {
  return Object.assign({}, objectOne, objectTwo);
}

const user = {id: 'u1', name: 'Jason'};
const details = {hobbies: ['Coding', 'Fitness']};

// const merged = merge<
//   {id: string, name: string},
//   {hobbies: string[]}
// >(user, details);
const merged = merge(user, details);
console.log('merged:', merged);

console.log('merged.hobbies:', merged.hobbies);
*/

// ========================================

// built-in generic
/*
const names: Array<string> = []; // string[]
// names[0].toUpperCase()

const promise: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.toUpperCase();
});
*/
