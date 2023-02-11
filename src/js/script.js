// string, number, boolean is primitive type
let name = 'Jason';
let newName = name;
newName = 'Bruce';
console.log(`name=${name}, newName=${newName}`);

console.log('=====================');

// object, array is reference type
let arr = [1, 2, 3];
let newArr = arr;
newArr.push(7, 8, 9);
console.log(`arr=${arr}, newArr=${newArr}`);

// copy value
let newArr2 = [...arr];
newArr2.push(11, 12);
console.log(`arr=${arr}, newArr=${newArr}, newArr2=${newArr2}`);
