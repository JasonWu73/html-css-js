type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  if (typeof n1 === 'number' && typeof n2 === 'number' ||
    resultConversion === 'as-number') {
    return +n1 + +n2;
  }

  return n1.toString() + n2.toString();
};

console.log(combine(1, 2, 'as-number'));
console.log(combine('1', '2', 'as-number'));

console.log(combine('hello', ' world', 'as-string'));
