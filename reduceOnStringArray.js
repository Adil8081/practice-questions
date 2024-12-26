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

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
// const joinWithComma = function (words) {
//   return [words.join(",")];
// };

const joinWithComma = function (words) {
  return words.reduce((combineWord, word) => {
    combineWord.push(word);
    return [combineWord.join(",")];
  }, []);
};

// console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words
    .reduce((combineWord, word) => {
      combineWord.unshift(word);

      return combineWord;
    }, [])
    .join(" ");
};

// console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((combineWord, word) => {
    combineWord.push(word);

    return combineWord;
  }, []);
};

// console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((comnineName, Name) => comnineName.concat(Name), "");
};

// console.log(concatenateNames(["John", "Jane", "Doe"]));
