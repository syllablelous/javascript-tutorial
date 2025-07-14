const exampleArray1 = ["hello", "world", "search", "good", "search"];
const exampleArray2 = ["not", "found"];

let noResultsFound = true;

for (let i = 0; i < exampleArray2.length; i++) {
  if (exampleArray2[i] === "search") {
    console.log(i);
    noResultsFound = false;
  }
  if (i === exampleArray2.length - 1 && noResultsFound) {
    console.log(-1);
  }
}
