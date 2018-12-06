const smallest = (a, b) => {
  return a >= b ? b : a;
}

const isEven = num => {
  if(Math.abs(num) === 1) return false;
  if(Math.abs(num) === 0) return true;
  return isEven((num) - 2);
}