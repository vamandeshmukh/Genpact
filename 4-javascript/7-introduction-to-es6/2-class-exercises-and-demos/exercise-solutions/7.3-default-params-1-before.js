function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
}

console.log(sum());
console.log(sum(20));
console.log(sum(5, 10));
