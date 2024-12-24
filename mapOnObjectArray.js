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

console.log(
  mathScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);
