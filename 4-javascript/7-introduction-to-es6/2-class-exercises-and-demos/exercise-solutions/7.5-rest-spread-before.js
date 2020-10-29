function unshift(array, a, b, c) {
  return [a, b, c].concat(array);
}

console.log(unshift([10, 20, 30], 'A', 'B', 'C'));
