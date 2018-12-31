const smallest = (a, b) => a >= b ? b : a;

const isEven = num => {
  if(Math.abs(num) === 1) return false;
  if(Math.abs(num) === 0) return true;
  return isEven((num) - 2);
}

const countBs = str => {
  return countChar(str, 'B');
}

const countChar = (str, letter) => {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === letter) count ++;
  }
  return count;
}