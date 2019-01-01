//exercise 1
const range = (start, end, step = 1) => {
  let result = [];
  if(step === 0) return 'Please give a valid step amount';
  if(step > 0) {
    for(let i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  if(step < 0) {
    for(let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

const sum = arr => {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

//exercise 2
const reverseArray = arr => {
  let result = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result;
}

const reverseArrayInPlace = arr => {
  for(let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr[i]);
    arr.splice(i, 1);
  }
}

//exercise 3
const arrayToList = (arr, result = {}) => {
  result.value = arr[0];
  if(arr.length === 1) {
    return result;
  }
  result.rest = arrayToList(arr.slice(1));
  return result;
}