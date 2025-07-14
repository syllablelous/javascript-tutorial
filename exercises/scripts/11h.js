const exampleArray1 = [1, 2, 3];
const exampleArray2 = [-2, -1, 0, 99];

function addOne(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const newNum = array[i] + 1;

    newArray.push(newNum);
  }

  console.log(newArray);
}

console.log("Example 1:");
addOne(exampleArray1);

console.log("Example 2:");
addOne(exampleArray2);
