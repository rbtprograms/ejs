const triangleLoop = num => {
  let res = '';
  for(let i = 0; i <= num; i++){
    res += '#\\n'
    console.log(res);
  }
}

const checkerBoard = num => {
  let row;
  for(let i = 1; i <= num; i++) {
    row = ''
    for(let j = 1; j <= num; j++) {
      if(j % 2 === 0) {
        row += '#';
      }
      if(j % 2 !== 0) {
        row += ' '
      }
    }
    console.log(row);
  }
}

checkerBoard(8);