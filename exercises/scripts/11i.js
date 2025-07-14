const arrayExample1 = [1, 2, 3];
const arrayExample2 = [1, 2, 3];
const arrayExample3 = [-2, -1, 0, 99];

function addNum(array, num) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const newNum = array[i] + num;

    newArray.push(newNum);
  }

  console.log(newArray);
}

addNum(arrayExample1, 2);
addNum(arrayExample2, 3);
addNum(arrayExample3, 2);
