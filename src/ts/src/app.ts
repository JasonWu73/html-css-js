// built-in generic
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
