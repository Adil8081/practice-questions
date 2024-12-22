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

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const hasGradeAbove80 = function (student) {
  return student.grade > 80;
}

const filterHighGrades = function (students) {
  return students.filter(hasGradeAbove80);
}

// console.log(filterHighGrades([{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }]));

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const orderedWithin30Days = function (orderDetail) {
  const date = orderDetail.orderDate.split('-');
  const month = date[1];
  const day = date.at(-1);

  if ((day >= 22 && +month === 11) || +month === 12) {
    return true;
  }

  return false;
}

const filterRecentOrders = function (orders) {
  return orders.filter(orderedWithin30Days);
}

// console.log(filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }, { orderDate: "2024-11-24" }]));

// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]

const computeAvgPrice = function (products) {
  let totalPrice = 0;
  const noOfProducts = products.length;

  for (const product of products) {
    totalPrice += product.price;
  }

  return totalPrice / noOfProducts;
}

const filterBelowAveragePrice = function (products) {
  const averagePrice = computeAvgPrice(products);

  return products.filter(function (product) {
    return product.price < averagePrice;
  })
}

console.log(filterBelowAveragePrice([{ name: "item1", price: 10 }, { name: "item2", price: 20 }, { name: "item3", price: 5 }]));