async function locateScalpel(nest) {
  // Your code here.
}

//remaking promise all
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let result = Array.from(promises.length);
    let counter = promises.length;
    for(let i in promises) {
        promises[i]
          .then(val => {
            result[i] = val;
            counter--;
            if (counter === 0) resolve(result);
          })
          .catch(reject)
      }
      if (promises.length === 0) resolve(result);
    });
}