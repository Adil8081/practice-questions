// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((combineWord, word) => combineWord.concat(word), "");
};

// console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce(
    (longWord, word) => (word.length > longWord.length ? word : longWord),
    ""
  );
};

// console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce(
    (shortWord, word) => (shortWord.length < word ? shortWord : word),
    ""
  );
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.join(",");
};

// console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
// const reverseWords = function (words) {
//   return words
//     .reduce((combineWord, word) => {
//       combineWord.unshift(word);

//       return combineWord;
//     }, [])
//     .join(" ");
// };

const reverseWords = function (words) {
  return words.reduce((combineWord, word) => word.concat(" ", combineWord));
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
