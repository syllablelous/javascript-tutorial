const exampleArray1 = ["egg", "apple", "egg", "egg", "ham"];

function removeEgg(foods) {
  const resultArray = [];
  let count = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && count < 2) {
      count++;
      continue;
    }
    resultArray.push(foods[i]);
  }

  console.log(resultArray);
}

removeEgg(exampleArray1);
