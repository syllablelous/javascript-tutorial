const exampleArray1 = ["green", "red", "blue", "red"];
const exampleArray2 = ["red", "green", "green", "red"];

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
    if (i === array.length - 1) {
      return -1;
    }
  }
}

function unique(array) {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i === findIndex(array, array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  console.log(uniqueArray);
}

// Attempt
/*
function unique(array) {
  const uniqueValues = [];
  const uniqueIndexes = [];

  for (let i = 0; i < array.length; i++) {
    let num = findIndex(array, array[i]);
    if (num !== -1 && !uniqueIndexes.includes(num)) {
      uniqueIndexes.push(num);
    }
  }

  let j = 0;
  while (j < uniqueIndexes.length) {
    const num = uniqueIndexes[j];
    uniqueValues.push(array[num]);
    j++;
  }

  console.log(uniqueValues);
}
*/

unique(exampleArray1);
unique(exampleArray2);
