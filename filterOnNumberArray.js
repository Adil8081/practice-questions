// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return (number & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5]))

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const isGreaterThan10 = function (number) {
  return number > 10;
};

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isGreaterThan10);
};

// console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));
