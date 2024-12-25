// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const isUserActive = function (userDetail) {
  return userDetail.active;
};

const filterActiveUsers = function (users) {
  return users.filter(isUserActive);
};

// console.log(filterActiveUsers([{username: "alice", active: true}, {username: "bob", active: false}]));

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const isProfileIncomplete = function (userDetail) {
  return !userDetail.profileComplete;
};

const filterIncompleteProfiles = function (users) {
  return users.filter(isProfileIncomplete);
};

// console.log(filterIncompleteProfiles([{ username: "alice", profileComplete: true }, { username: "bob", profileComplete: false }]));

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const inStock = function (productDetail) {
  return productDetail.inStock;
};

const filterInStockProducts = function (products) {
  return products.filter(inStock);
};

// console.log(filterInStockProducts([{ product: "apple", inStock: true }, { product: "banana", inStock: false }]));

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const ageAbove30 = function (person) {
  return person.age > 30;
};

const filterAdults = function (people) {
  return people.filter(ageAbove30);
};

// console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const hasAbove200Pages = function (book) {
  return book.pages > 200;
};

const filterLongBooks = function (books) {
  return books.filter(hasAbove200Pages);
};

// console.log(filterLongBooks([{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }]));

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const hasGradeAbove80 = function (student) {
  return student.grade > 80;
};

const filterHighGrades = function (students) {
  return students.filter(hasGradeAbove80);
};

// console.log(filterHighGrades([{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }]));

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const orderedWithin30Days = function (orderDetail) {
  const date = orderDetail.orderDate.split("-");
  const month = date[1];
  const day = date.at(-1);

  if ((day >= 22 && +month === 11) || +month === 12) {
    return true;
  }

  return false;
};

const filterRecentOrders = function (orders) {
  return orders.filter(orderedWithin30Days);
};

// console.log(
//   filterRecentOrders([
//     { orderDate: "2024-11-01" },
//     { orderDate: "2024-12-01" },
//     { orderDate: "2024-11-24" },
//   ])
// );

// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const filterBelowAveragePrice = function (products) {
  const averagePrice =
    products.reduce((total, product) => total + product.price, 0) /
    products.length;

  return products.filter((product) => product.price < averagePrice);
};

// console.log(
//   filterBelowAveragePrice([
//     { name: "item1", price: 10 },
//     { name: "item2", price: 20 },
//     { name: "item3", price: 5 },
//   ])
// );

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]
const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter((student) =>
    student.subjects.every((subject) => subject.passed)
  );
};

// console.log(
//   filterStudentsWithAllSubjectsPassed([
//     {
//       name: "John",
//       subjects: [
//         { name: "Math", passed: true },
//         { name: "Science", passed: true },
//       ],
//     },
//     {
//       name: "Jane",
//       subjects: [
//         { name: "Math", passed: false },
//         { name: "Science", passed: true },
//       ],
//     },
//   ])
// );
