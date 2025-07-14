const exampleArray1 = ["hello", "world", "search", "good"];
const exampleArray2 = ["not", "found"];

for (let i = 0; i < exampleArray2.length; i++) {
  if (exampleArray2[i] === "search") {
    console.log(i);
    break;
  }
  if (i === exampleArray2.length - 1) {
    console.log(-1);
  }
}
