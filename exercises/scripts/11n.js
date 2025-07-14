const exampleArray = [
  "apple",
  "grape",
  "apple",
  "apple",
  "mango",
  "grape",
  "apple",
  "banana",
];

function countWords(words) {
  let count = {};

  for (let i = 0; i < words.length; i++) {
    !count[`${words[i]}`]
      ? ((count[`${words[i]}`] = 0), count[`${words[i]}`]++)
      : count[`${words[i]}`]++;
  }

  console.log(count);
}

countWords(exampleArray);
