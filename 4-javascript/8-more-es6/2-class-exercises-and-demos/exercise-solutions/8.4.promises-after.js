const getUser = id => {
  return new Promise((resolve, reject) => {
    console.log('getUser() begin');

    if (isNaN(id)) {
      reject('User Id should be a number');
      return;
    }

    setTimeout(() => {

      resolve({
        id: id,
        name: 'Hari'
      });
      console.log('getUser() end');

    }, 3000);
  });
}

console.log('Begin');

// Success scenario
getUser(1)
  .then(user => console.log('user:', user))
  .catch(error => console.log('Error:', error));

// Failure scenario
// getUser('A')
//   .then(user => console.log('user:', user))
//   .catch(error => console.log('Error:', error));

console.log('End');
