// nullish coalescing
// const data = undefined;
// const data = null;
const data = 0;
const result = data ?? 'DEFAULT';
// const result = data || 'DEFAULT';
console.log(result);

console.log((void 0) === undefined);

// optional chaining
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json?.notExists?.id))

// function overloads
// type Combinable = string | number;
// type Numeric = number | boolean;
//
// type Universal = Combinable & Numeric;
//
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable): string | number {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString;
//   }
//
//   return a + b;
// }
//
// const total = add('Hello', 1);
// console.log(total.trim());
