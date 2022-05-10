function getMinMax(str) {
  let arr = str.split(' ');
  let newArr = arr.filter(item => +item);
  return {
    min: Math.min(...newArr),
    max: Math.max(...newArr)
  };
}
