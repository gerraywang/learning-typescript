function sum(...vals: number[]): number {
  let result:number = 0;
  for (let val of vals) {
    result += val;
  }
  return result;
}

console.log(sum(1,2,3))