const exampleArray1 = [1, 1, 2];
const pairArray1 = [1, 1, 3];

const exampleArray2 = [1, 2, 3];
const pairArray2 = [4, 5, 6];

function addArrays(array1, array2) {
  const resultArray = [];

  for (let i = 0; i < array1.length && i < array2.length; i++) {
    const result = array1[i] + array2[i];

    resultArray.push(result);
  }

  console.log(resultArray);
}

addArrays(exampleArray1, pairArray1);
addArrays(exampleArray2, pairArray2);
