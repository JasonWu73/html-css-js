const num1El = document.querySelector('.num1') as HTMLInputElement;
const num2El = document.querySelector('.num2')! as HTMLInputElement;
const btnEl = document.querySelector('button') as HTMLButtonElement;

btnEl.addEventListener('click', () => {
  console.log(sum(+num1El.value, +num2El.value));
});

function sum(num1: number, num2: number) {
  return num1 + num2;
}
