const buttonElement = document.querySelector('button')!;

const clickHandler = (message: string) => {
  console.log(`Clicked: ${message}`)
};

buttonElement.addEventListener('click', clickHandler.bind(null, 'data'));

let logged;

const consoleLog = (data: string) => {
  console.log(data)
  logged = true;
  logged = 'Jason';
  console.log(logged);
}

consoleLog('the data');
