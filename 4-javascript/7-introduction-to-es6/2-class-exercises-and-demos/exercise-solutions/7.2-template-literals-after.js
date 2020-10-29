const responses = [
  { code: 200, message: 'OK' },
  { code: 400, message: 'Bad request' },
  { code: 401, message: 'Not authorized' },
  { code: 500, message: 'Server error' }
];

const successCode = 200;
let slNo = 1;
let errorSummary = '';
for (let i = 0; i < responses.length; i++) {
  if (responses[i].code !== successCode) {
    errorSummary += `(${slNo++}) ${responses[i].message}\n`;
  }
}

const totalErrors = slNo - 1;
console.log('Error Summary:');
console.log('-------------------');
console.log(errorSummary);
console.log('-------------------');
console.log(`Total Errors: ${totalErrors} / ${responses.length}`);
console.log('-------------------');
