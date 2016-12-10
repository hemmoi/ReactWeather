function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('not numbers');
    }
  }
);
}

addPromise(2, 3).then(
  function (sum) {console.log('sum is ', sum);},
  function (err) {console.log('error ', err);}
)

addPromise(2, "kukkuu").then(
  function (sum) {console.log('sum is ', sum);},
  function (err) {console.log('error ', err);}
)
