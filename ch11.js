async function locateScalpel(nest) {
  // Your code here.
}

function Promise_all(promises) {
  let result = Array.from(promises.length);
  let counter = promises.length;
  //if (counter === 0) return result;
  return new Promise((resolve, reject) => {
    for(let i in promises) {
        promises[i]
          .then(val => {
            result[i] = val;
            counter--;
            resolve(val);
          })
          .catch(err => {
            reject(err)
          });
      }
    });
}