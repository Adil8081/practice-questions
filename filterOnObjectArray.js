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
  const averageBookRating = averageOfObjectProperty(books)("rating");

  return books.filter((book) => book.rating > averageBookRating);
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

// console.log(
//   filterActiveUsersByPostCount([
//     { username: "Alice", postCount: 5 },
//     { username: "Bob", postCount: 8 },
//     { username: "Charlie", postCount: 3 },
//   ])
// );

// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, age) {
  return people.filter((person) => person.age > age);
};

// console.log(
//   filterByAge(
//     [
//       { name: "Alice", age: 25 },
//       { name: "Bob", age: 30 },
//       { name: "Charlie", age: 22 },
//     ],
//     24
//   )
// );

// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {
  return products.filter((product) => product.price > price);
};

// console.log(
//   filterByPrice(
//     [
//       { name: "item1", price: 20 },
//       { name: "item2", price: 50 },
//       { name: "item3", price: 10 },
//     ],
//     20
//   )
// );

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) {
  return students.filter((student) => student.grades.math > grade);
};

// console.log(
//   filterByMathGrade(
//     [
//       { name: "John", grades: { math: 80, science: 90 } },
//       { name: "Jane", grades: { math: 70, science: 85 } },
//     ],
//     75
//   )
// );

// filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]
const filterBySalary = function (employees, salary) {
  return employees.filter((employee) => employee.salary > salary);
};

// console.log(
//   filterBySalary(
//     [
//       { name: "Alice", salary: 5000 },
//       { name: "Bob", salary: 7000 },
//     ],
//     6000
//   )
// );

// filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantity) {
  return orders.filter((order) => order.quantity > quantity);
};

// console.log(
//   filterByQuantity(
//     [
//       { orderId: 1, quantity: 10 },
//       { orderId: 2, quantity: 5 },
//     ],
//     6
//   )
// );

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {
  return books.filter((book) => book.year > year);
};

// console.log(
//   filterByYear(
//     [
//       { title: "Book1", year: 2020 },
//       { title: "Book2", year: 2022 },
//     ],
//     2021
//   )
// );

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {
  return students.filter((student) => student.grades[subject] > threshold);
};

// console.log(
//   filterBySubjectGrade(
//     [
//       { name: "Alice", grades: { math: 90, science: 80 } },
//       { name: "Bob", grades: { math: 70, science: 85 } },
//     ],
//     "math",
//     80
//   )
// );

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 1, likes: 100}]
const filterByLikes = function (photos, likes) {
  return photos.filter((photo) => photo.likes > likes);
};

// console.log(
//   filterByLikes(
//     [
//       { id: 1, likes: 100 },
//       { id: 2, likes: 50 },
//     ],
//     60
//   )
// );

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) {
  return users.filter((user) => user.posts > postCount);
};

// console.log(
//   filterByPostCount(
//     [
//       { username: "Alice", posts: 10 },
//       { username: "Bob", posts: 5 },
//     ],
//     6
//   )
// );

// Apply a discount to each item's price, then filter for items under a certain price [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item2", price: 45}]
const filterDiscountedItems = function (items, discount, maxPrice) {
  const discountPriceItems = items.map((item) => {
    item.price -= item.price * discount * 0.01;
    return item;
  });

  return discountPriceItems.filter((item) => item.price < maxPrice);
};

// console.log(
//   filterDiscountedItems(
//     [
//       { name: "item1", price: 100 },
//       { name: "item2", price: 50 },
//     ],
//     10,
//     50
//   )
// );

// Convert product names to uppercase, then filter for products with names longer than a certain number [{name: "apple"}, {name: "banana"}] => [{name: "APPLE"}]
const filterLongProductNames = function (products, minLength) {
  const upperCaseProductsName = products.map((product) => {
    product.name = product.name.toUpperCase();
    return product;
  });

  console.log(upperCaseProductsName);
  return upperCaseProductsName.filter(
    (product) => product.name.length > minLength
  );
};

// console.log(filterLongProductNames([{ name: "apple" }, { name: "banana" }], 5));
