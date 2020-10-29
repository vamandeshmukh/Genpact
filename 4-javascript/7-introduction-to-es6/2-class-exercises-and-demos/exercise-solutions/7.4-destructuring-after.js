const customers = [
  ['Hari', '98860-98860', 'hari@abc.com', 'Bengaluru'],
  ['Ram', '98860-98861', 'ram@abc.com', 'Chennai'],
  ['Shiv', '98860-98862', 'shiv@abc.com', 'Mumbai'],
  ['Krish', '98860-98863', 'krish@abc.com', 'Delhi']
];

const customersAsObject = customers.map(
  function ([name, phone, email, city]) {
    return { name, phone, email, city };
  }
);

console.log(customers);
console.log(customersAsObject);
