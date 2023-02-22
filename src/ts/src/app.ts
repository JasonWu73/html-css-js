// index properties
interface ErrorContainer {
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  'email': 'Invalid Email Address',
  1: 'Fatal'
};
console.log(errorBag);
