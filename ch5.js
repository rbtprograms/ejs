//flatten
const flatten = arr => {
    return arr.reduce((acc, cur) => acc.concat(cur), [])
}

//loop
const loop = (val, test, exec, res) => {
    for(let i = val; test(val); val = res(val)) {
        exec(val);
    }
}

//every
//w/o some
const every = (iter, callback) => {
    for(let i of iter) {
        if(!callback(i)) return false;
    }
    return true;
}
// w/some
const every2 = (iter, callback) => {
    return iter.some(item => !callback(item))
}