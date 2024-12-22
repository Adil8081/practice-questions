// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const hasAbove5Letters = function (word) {
  return word.length > 5;
}

const filterLongWords = function (words) {
  return words.filter(hasAbove5Letters);
}

// console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const ageAbove30 = function (person) {
  return person.age > 30;
}

const filterAdults = function (people) {
  return people.filter(ageAbove30);
}

// console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const isGreaterThan10 = function (number) {
  return number > 10;
}

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isGreaterThan10);
}

// console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const hasAbove200Pages = function (book) {
  return book.pages > 200;
}

const filterLongBooks = function (books) {
  return books.filter(hasAbove200Pages);
}

// console.log(filterLongBooks([{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }]));