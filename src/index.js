
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sortArr = [];
  if (!matrix || matrix.length === 0) {
    sortArr;
  } else {
    matrix.forEach((element, index, array) => {
      if (index % 2 == 0) {
        sortArr = sortArr.concat(element);
      } else {
        sortArr = sortArr.concat(element.reverse())
      }
    });
  }
  return sortArr;
}
