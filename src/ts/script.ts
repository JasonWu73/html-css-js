const btnEl = document.querySelector('.btn') as HTMLButtonElement;
const num1El = document.querySelector('#num1') as HTMLInputElement;
const num2El = document.querySelector('#num2') as HTMLInputElement;

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

btnEl.addEventListener('click', () => {
  console.log(add(+num1El.value, +num2El.value));
});
