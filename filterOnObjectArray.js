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

// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const filterHighValueOrders = function (orders) {
  const averageOrderAmount =
    orders.reduce((total, order) => total + order.amount, 0) / orders.length;

  return orders.filter((order) => order.amount > averageOrderAmount);
};

// console.log(
//   filterHighValueOrders([
//     { orderId: 1, amount: 20 },
//     { orderId: 2, amount: 50 },
//     { orderId: 3, amount: 10 },
//   ])
// );

// books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}] => [{title: "Book 2", rating: 5}]
const averageOfObjectProperty = (objects) => {
  return (property) => {
    return (
      objects.reduce((total, element) => total + element[property], 0) /
      objects.length
    );
  };
};

const filterTopRatedBooks = function (books) {
  const averageRating = averageOfObjectProperty(books)("rating");

  return books.filter((book) => book.rating > averageRating);
};

// console.log(
//   filterTopRatedBooks([
//     { title: "Book 1", rating: 4 },
//     { title: "Book 2", rating: 5 },
//     { title: "Book 3", rating: 3 },
//   ])
// );

// employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]
const filterHighSalaryEmployees = function (employees) {
  const averageSalary = averageOfObjectProperty(employees)("salary");

  return employees.filter((employee) => employee.salary > averageSalary);
};

// console.log(
//   filterHighSalaryEmployees([
//     { name: "Alice", salary: 5000, department: "HR" },
//     { name: "Bob", salary: 7000, department: "HR" },
//     { name: "Charlie", salary: 4000, department: "IT" },
//   ])
// );

// cities with a population higher than the median [{name: "City A", population: 2000}, {name: "City B", population: 5000}, {name: "City C", population: 3000}] => [{name: "City B", population: 5000}]
const filterCitiesAboveMedianPopulation = function (cities) {
  const sortPopulation = cities
    .map((city) => city.population)
    .sort((population1, population2) => population1 - population2);

  const middleIndex = Math.floor(sortPopulation.length / 2);

  const medianPopulation =
    sortPopulation % 2 === 0
      ? (sortPopulation[middleIndex - 1] + sortPopulation[middleIndex]) / 2
      : sortPopulation[middleIndex];

  return cities.filter((city) => city.population > medianPopulation);
};

// console.log(
//   filterCitiesAboveMedianPopulation([
//     { name: "City A", population: 2000 },
//     { name: "City B", population: 5000 },
//     { name: "City C", population: 3000 },
//   ])
// );

// posts with more than the average number of likes [{postId: 1, likes: 100}, {postId: 2, likes: 200}, {postId: 3, likes: 150}] => [{postId: 2, likes: 200}]
const filterPopularPosts = function (posts) {
  const averageLikes = averageOfObjectProperty(posts)("likes");
  // console.log(averageLikes);

  return posts.filter((post) => post.likes > averageLikes);
};

// console.log(
//   filterPopularPosts([
//     { postId: 1, likes: 100 },
//     { postId: 2, likes: 200 },
//     { postId: 3, likes: 150 },
//   ])
// );

// users who have posted more than the average number of posts [{username: "Alice", postCount: 5}, {username: "Bob", postCount: 8}, {username: "Charlie", postCount: 3}] => [{username: "Bob", postCount: 8}]
const filterActiveUsersByPostCount = function (users) {
  const averagePosts = averageOfObjectProperty(users)("postCount");

  return users.filter((user) => user.postCount > averagePosts);
};

console.log(
  filterActiveUsersByPostCount([
    { username: "Alice", postCount: 5 },
    { username: "Bob", postCount: 8 },
    { username: "Charlie", postCount: 3 },
  ])
);
