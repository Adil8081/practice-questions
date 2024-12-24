// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map((data) => data.name);
};

// console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map((data) => data.age);
};

// console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) {
  return objects.map((data) => data.name[0]);
};

// console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) {
  return rectangles.map((dimensions) => dimensions.width * dimensions.height);
};

// console.log(calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) {
  return objects.map((data) => data.active);
};

// console.log(extractFlags([{ active: true }, { active: false }]));

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) {
  return objects.map((names) => [names.firstName, names.lastName].join(" "));
};

// console.log(fullNames([{ firstName: "Alice", lastName: "Smith" },{ firstName:"Bob", lastName: "Brown" },]));

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map((person) => person.age >= 18);
};

// console.log(
//   isAdult([
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//   ])
// );

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) {
  return objects.map((places) => {
    const cityAbbrevation = places.city
      .split(" ")
      .map((part) => part[0])
      .join("");

    return [cityAbbrevation, places.country].join(",");
  });
};

// console.log(
//   abbreviations([
//     { city: "New York", country: "USA" },
//     { city: "Los Angeles", country: "USA" },
//     { city: "New Delhi", country: "IND" },
//   ])
// );

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) {
  return objects.map((student) => student.scores.math);
};

// console.log(
//   mathScores([
//     { name: "Alice", scores: { math: 90, english: 85 } },
//     { name: "Bob", scores: { math: 80, english: 75 } },
//   ])
// );

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) {
  return objects.map((cordinates) => [cordinates.x, cordinates.y]);
};

// console.log(
//   extractCoordinates([
//     { x: 1, y: 2 },
//     { x: 3, y: 4 },
//   ])
// );

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) {
  return objects.map((person) => [
    [person.firstName, person.lastName].join(" "),
    person.age,
  ]);
};

// console.log(
//   fullNameAndAge([
//     { firstName: "Alice", lastName: "Smith", age: 25 },
//     { firstName: "Bob", lastName: "Brown", age: 30 },
//   ])
// );

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) {
  return objects.map((student) => Object.values(student.scores));
};

// console.log(
//   extractScores([
//     { name: "Alice", scores: { math: 90, english: 85 } },
//     { name: "Bob", scores: { math: 80, english: 75 } },
//   ])
// );

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) {
  return objects.map((object) => Object.values(object));
};

// console.log(
//   keyValuePairs([
//     { key: "a", value: 1 },
//     { key: "b", value: 2 },
//   ])
// );

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) {
  return objects.map((person) => person.name.split(" "));
};

// console.log(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 },{ name: "pob", score: 70 }] => [0.8, 1.0.7]
const normalizeScores = function (objects) {
  return objects.map((person) => person.score / 100);
};

console.log(
  normalizeScores([
    { name: "Alice", score: 80 },
    { name: "Bob", score: 100 },
    { name: "pob", score: 70 },
  ])
);
