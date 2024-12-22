// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(function (number) {
    return Math.pow(number, 2);
  });
}

// console.log(squaresOf([1, 2, 3, 4, 5]));
// console.log(squaresOf([0, -1]));

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(function (number) {
    return number !== 0;
  });
}

// console.log(truthValuesOf([0, 1, 2, 3]));

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(function (array) {
    return array.reverse();
  })
};

// console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const runningSumArray = function (array) {
  let runningSum = 0;

  return array.map(function (number) {
    runningSum += number;

    return runningSum;
  });
}

const cumulativeSumsOf = function (arrays) {
  return arrays.map(runningSumArray);
};

// console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const range = function (number) {
  const generatedRange = [];

  for (let index = 0; index < number; index++) {
    generatedRange.push(index);
  }

  return generatedRange;
}

const rangesOf = function (numbers) {
  return numbers.map(range);
};

// console.log(rangesOf([3, 5, 2]));

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {
  return arrays.map(function (array) {
    return array.flat();
  });
};

// console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));