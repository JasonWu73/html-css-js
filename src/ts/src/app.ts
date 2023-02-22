// generic utility types
interface Account {
  username: string,
  password: string,
  authorities: string[]
}

function createAccount(
  username: string,
  password: string,
  authorities: string[]
): Account {
  // return {username, password, authorities};

  const account: Partial<Account> = {};
  account.username = username;
  account.password = password;
  account.authorities = authorities;
  return account as Account;
}

console.log(createAccount(
  'jason',
  '111',
  ['admin']
));

const users: Readonly<string[]> = ['Jason', 'Jack'];
users.push('Bruce');
users.pop();

// ========================================

// generic class
/*
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    const itemIndexInData = this.data.indexOf(item);
    if (itemIndexInData === -1) {
      console.error(
        `Can not found ${JSON.stringify(item)} \
in ${JSON.stringify(this.data)}`
      );
      return;
    }

    this.data.splice(itemIndexInData, 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const dataStorage = new DataStorage<number | string>();

dataStorage.addItem(1);
dataStorage.addItem('1');

const items = dataStorage.getItems();
console.log('typeof items[0]', typeof items[0]);
console.log('typeof items[1]', typeof items[1]);
*/

/*
const objectStorage = new DataStorage<object>();

objectStorage.addItem({name: 'Jason'});
const bruce = {name: 'Bruce'};
objectStorage.addItem(bruce);
// objectStorage.removeItem({name: 'Bruce'});
objectStorage.removeItem(bruce);
console.log(objectStorage.getItems());
*/

// keyof constraint
/*
function extractAndDescribe<T extends object, U extends keyof T>(
  obj: T,
  key: U
): string {
  return `Value: ${obj[key]}`;
}

const result = extractAndDescribe({name: 'Jason'}, 'name');
console.log(result);
*/

// ========================================

// another generic function
/*
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
*/

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
