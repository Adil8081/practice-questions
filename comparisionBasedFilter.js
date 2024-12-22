// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const hasAbove5Letters = function (word) {
  return word.length > 5;
}

const filterLongWords = function (words) {
  return words.filter(hasAbove5Letters);
}

// console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));

