// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map((data) => data.name);
};

// console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));
