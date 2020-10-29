function getUser(id, callback) {
  console.log('getUser() begin');

  if (isNaN(id)) {
    callback('User Id should be a number');
    return;
  }

  setTimeout(function () {

    callback(null, {
      id: id,
      name: 'Hari'
    });
    console.log('getUser() end');

  }, 3000);
}

console.log('Begin');

getUser(1, function (error, user) {
  if (error) {
    console.log('Error:', error);
    return;
  }

  console.log('user:', user);
});

console.log('End');
