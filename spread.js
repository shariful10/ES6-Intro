// const max = Math.max(20, 15, 320, 327);
// console.log(max);

const numbers = [20, 15, 320, 327, 450];
const largest = Math.min(...numbers);
console.log(largest);

const numbers2 = [40, 51, ...numbers, 42, 68];
console.log(numbers2);