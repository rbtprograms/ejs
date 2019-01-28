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
  if(!result.rest) {
    result.rest = null
  }
  if(arr.length === 1) {
    return result;
  }
  result.rest = arrayToList(arr.slice(1));
  return result;
}

const listToArray = (list, result = []) => {
  if(list.rest === null) {
    return result.push(list.value)
  }
  result.push(list.value)
  listToArray(list.rest, result);
  return result;
}

const prepend = (el, list) => {
  return { value: el, rest: list }
}

const nth = (list, index, position = 0) => {
  if(position === index) {
    return list.value;
  }
  position++;
  return nth(list.rest, index, position)
}

//exercise 4
const deepEqual = (obj1, obj2) => {
  if(Object.keys(obj1) !== Object.keys(obj2)) {
    return false
  }
  let values1 = Object.values(obj1), values2 = Object.values(obj2);
  for(let i in values1) {
    if(typeof values1[i] === Object) {
      
    }
  }
  return false;
}