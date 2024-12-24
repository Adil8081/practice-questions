// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map((string) => string.length);
};

// console.log(lengthsOf(['tab', 'control', 'caps', 'spacebar']));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map((string) => string.toUpperCase());
};

// console.log(uppercaseOf(['boTtle', 'moBile', 'charger', 'earphone']));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map((string) => string.at(0) || "");
};

// console.log(firstCharactersOf(["apple", "banana", "kiwi"]));
// console.log(firstCharactersOf(["apple", "", "kiwi"]));

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reversedStringsOf = function (strings) {
  return strings.map((string) => [...string].reverse().join(""));
};

// console.log(reversedStringsOf(["hello", "world"]));

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const doubleStringChar = function (string) {
  return [...string].map((char) => char.repeat(2)).join("");
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleStringChar);
};

// console.log(doubleLettersOf(["cat", "dog", "bat"]));

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map((boolean) => !boolean);
};

// console.log((negatedBooleansOf([true, false, true])));

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map((char) => char.charCodeAt());
};

// console.log(charCodesOf(["a", "b", "c"]));

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domainNamesOf = function (emails) {
  return emails.map((email) => email.split("@").at(-1));
};

console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map((text) => text.split(" "));
};

// console.log(splitWordsOf(["hello world", "goodbye moon"]));

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map((array) => array.join(""));
};

console.log(
  joinedArraysOf([
    ["a", "b"],
    ["c", "d"],
  ])
);

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map((string) => string.repeat(2));
};

// console.log(repeatedStringsOf(["hi", "bye"]));

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const hasVowel = function (count, char) {
  const vowels = "AaEeIiOoUu";

  return vowels.includes(char) ? (count += 1) : count;
};

const countVowels = function (string) {
  return [...string].reduce(hasVowel, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(countVowels);
};

// console.log(countVowelsOf(["apple", "banana", "grape"]));

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const isNotVowel = function (char) {
  const vowels = "AaEeIiOoUu";

  return vowels.includes(char) ? "" : char;
};

const removeVowels = function (string) {
  return [...string].filter(isNotVowel).join("");
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

// console.log(withoutVowelsOf(["apple", "banana", "grape"]));

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reverseWords = function (words) {
  return words
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWords);
};

// console.log(reversedWordsOf(["hello world", "goodbye moon"]));

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const majuscule = function (word) {
  const [firstChar, ...restChar] = [...word];

  return firstChar.toUpperCase() + restChar.join("");
};

const majusculeFirstChar = function (string) {
  return string.split(" ").map(majuscule).join(" ");
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(majusculeFirstChar);
};

// console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLength = function (string) {
  return string.split(" ").map(function (word) {
    return word.length;
  });
};

const wordLengthsOf = function (strings) {
  return strings.map(wordLength);
};

// console.log(wordLengthsOf(["apple pie", "banana split"]));

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map(function (string) {
    return [...string].sort().join("");
  });
};

// console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) {
  return strings.map((string) => "[" + string + "]");
};

console.log(wrappedStringsOf(["apple", "banana"]));
