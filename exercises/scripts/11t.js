const exampleArray1 = ["egg", "apple", "egg", "egg", "ham"];

function removeEgg(foods) {
  const reversedArray = foods.reverse();
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

  console.log(resultArray);
}

removeEgg(exampleArray1);
