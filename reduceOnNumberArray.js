// sumOf([1, 2, 3, 4]) => 10
// const sum = function (total, num) {
//   return total + num;
// }

const sumOf = function (numbers) {
  return numbers.reduce((total, num) => total + num, 0);
};

// console.log(sumOf([1, 2, 3, 4]))

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const totalSum = numbers.reduce(sum, 0);
  const noOfTerms = numbers.length;

  return totalSum / noOfTerms;
};

// console.log(averageOf([1, 2, 3, 4, 5]));

// productOf([1, 2, 3, 4]) => 24
const multiplication = function (product, number) {
  return product * number;
};

const productOf = function (numbers) {
  return numbers.reduce(multiplication, 1);
};

// console.log(productOf([1, 2, 3, 4]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

const minOf = function (numbers) {
  return numbers.reduce(min, Infinity);
};

// console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

const maxOf = function (numbers) {
  return numbers.reduce(max, -Infinity);
};

// console.log(maxOf([3, 1, 4, 1, 5, 9, 2]))

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.filter((number) => number > 0).reduce(sum, 0);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const squaresOf = function (number) {
  return Math.pow(number, 2);
};

const sumOfSquares = function (numbers) {
  return numbers.map(squaresOf).reduce(sum, 0);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return numbers.filter((number) => (number & 1) === 1).reduce(sum, 0);
};

// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const negativeCounter = function (count, number) {
  return number < 0 ? count + 1 : count;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(negativeCounter, 0);
};

// console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const isEven = function (number) {
  return (number & 1) === 0;
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(squaresOf).reduce(sum, 0);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce(
    (repetitiveNumbers, number) => [...repetitiveNumbers, number, number],
    []
  );
};

// console.log(duplicateNumbers([1, 2, 3]));
