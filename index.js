let a = 5;
let b = 5;
let n = '5';

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  return ++n;
}

function dec(n) {
  return --n;
}

function makeInt(n) {
  return parseInt(n);
}

console.log(add(a, b));
console.log(multiply(a, b));
console.log(subtract(a, b));
console.log(divide(a, b));
console.log(inc(n));
console.log(dec(n));
console.log(makeInt(n));
