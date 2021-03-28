module.exports = function countCats(matrix) {
  const cat = '^^';
  var n = 0;

  matrix.forEach(element => {
    element.forEach(item => {
      if (item === cat) {
        n++;
      }
    });
  });

    return n;
};