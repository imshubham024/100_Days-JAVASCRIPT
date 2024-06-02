const min = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr < acc) {
      acc = curr;
    }
    return acc;
  }, arr[1]);// initiallize the accumulator
};

console.log(min([5, 8, 2, 6]));
