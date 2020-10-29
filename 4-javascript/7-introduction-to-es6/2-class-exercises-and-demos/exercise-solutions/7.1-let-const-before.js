var responses = [
  { code: 200, message: 'OK' },
  { code: 400, message: 'Bad request' },
  { code: 401, message: 'Not authorized' },
  { code: 500, message: 'Server error' }
];

var successCode = 200;
var slNo = 1;
var errorSummary = '';
for (var i = 0; i < responses.length; i++) {
  if (responses[i].code !== successCode) {
    errorSummary += '(' + slNo++ + ')' + ' ' + responses[i].message + '\n';
  }
}

var totalErrors = slNo - 1;
console.log('Error Summary:');
console.log('-------------------');
console.log(errorSummary);
console.log('-------------------');
console.log('Total Errors: ' + totalErrors + ' / ' + responses.length);
console.log('-------------------');
