function unshift(array, ...anotherArray) {
  return [...anotherArray, ...array];
}

console.log(unshift([10, 20, 30], 'A', 'B', 'C'));
