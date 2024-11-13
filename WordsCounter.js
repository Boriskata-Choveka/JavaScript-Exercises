function countOccurrences(arr) {
  let targetWords = arr[0].split(" ");
  let wordCounts = {};

  targetWords.forEach((word) => {
    wordCounts[word] = 0;
  });

  for (let i = 1; i < arr.length; i++) {
    let word = arr[i];
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word]++;
    }
  }

  let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

  sortedWords.forEach(([word, count]) => {
    console.log(`${word} - ${count}`);
  });
}
countOccurrences([
  "is the",

  "first",
  "sentence",
  "Here",
  "is",

  "another",
  "the",
  "And",
  "finally",
  "the",

  "the",
  "sentence",
]);
