const combine = (
  n1: number | string,
  n2: number | string,
  resultConversion: 'as-number' | 'as-string'
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
