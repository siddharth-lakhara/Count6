let num = process.argv.slice(2);
let min = Math.min(...num);

console.log(`The minimum of [${num}] is ${min}`);
