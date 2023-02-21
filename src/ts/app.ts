genError(500, 'deliberate throw error')
console.log('finish')

const test = (a: string): void => {

};

function genError(
  code: number,
  msg: string): never {
  throw {code, msg};
}
