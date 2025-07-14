const exampleArray1 = ["egg", "apple", "egg", "egg", "ham"];

function removeEgg(foods) {
  const resultArray = [];

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      continue;
    }
    resultArray.push(foods[i]);
  }

  console.log(resultArray);
}

removeEgg(exampleArray1);
