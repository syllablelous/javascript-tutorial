const exampleArray1 = ["egg", "apple", "egg", "egg", "ham"];

function removeEgg(foods) {
  const reversedArray = foods.slice().reverse();
  let resultArray = [];
  let count = 0;

  for (let i = 0; i < reversedArray.length; i++) {
    if (reversedArray[i] === "egg" && count < 2) {
      count++;
      continue;
    }
    resultArray.push(reversedArray[i]);
  }

  resultArray = resultArray.reverse();

  console.log("Original Array:");
  console.log(foods);

  console.log("Modified Array:");
  console.log(resultArray);
}

removeEgg(exampleArray1);
