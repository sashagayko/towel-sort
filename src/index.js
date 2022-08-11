
// You should implement your task here.

module.exports = function towelSort (matrix =[]) {
    let arr =[];
    matrix.forEach((item, i) => {
      if (i%2 === 0 ) {
        item.forEach(el => {
            arr.push(el);
        })
      } else {
        item.reverse().forEach(el => {
            arr.push(el);
        })
      }
    })
    return arr;
}
