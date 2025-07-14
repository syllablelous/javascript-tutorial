const exampleArray1 = ["green", "red", "blue", "red"];

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      console.log(i);
      break;
    }
    if (i === array.length - 1) {
      console.log(-1);
    }
  }
}

findIndex(exampleArray1, "red");
findIndex(exampleArray1, "yellow");
