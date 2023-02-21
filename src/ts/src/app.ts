const buttonElement = document.querySelector('button')!;
let appId = 'appid';

const add = (
  numberOne: number,
  numberTwo: number): number | undefined => {
  const result = numberOne + numberTwo;
  if (result > 0) {
    return result;
  }
  return;
};

const clickHandler = (message: string/* , age: number */) => {
  // let username = 'Jason';
  console.log(`Clicked: ${message}`)
};

buttonElement.addEventListener(
  'click',
  clickHandler.bind(null, 'data', 25));

let logged;

const consoleLog = (data: string) => {
  console.log(data)
  logged = true;
  logged = 'Jason';
  console.log(logged);
}

consoleLog('the data');
