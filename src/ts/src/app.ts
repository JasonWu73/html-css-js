// type casting
// const paragraphElement = <HTMLInputElement>
//   document.querySelector('.message-output')!;

const paragraphElement =
  document.querySelector('.message-output')! as HTMLInputElement;

paragraphElement.value = 'Hi there!';
