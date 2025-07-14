const arrayExample = [1, 20, 22, 24, 5];
const arrayExample2 = ["hi", "hello", "good"];

function getLastValue(array) {
  const lastIndex = array.length - 1;
  console.log(array[lastIndex]);
}

getLastValue(arrayExample);
getLastValue(arrayExample2);
