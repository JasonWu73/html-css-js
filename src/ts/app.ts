add(1, 2, (result) => {
  console.log(result);
  return result;
});

function add(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}
