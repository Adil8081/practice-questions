// concatenateWords(["hello", "world"]) => "helloworld"
const concatWord = function (string, word) {
  return string.concat(word);
};

const concatenateWords = function (words) {
  return words.reduce(concatWord, "");
};

// console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longerWord = function (longWord, word) {
  return word.length > longWord.length ? word : longWord;
};

const longestWord = function (words) {
  return words.reduce(longerWord, "");
};

// console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce(
    (shortestWord, word) => (shortestWord.length < word ? shortestWord : word),
    ""
  );
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));
