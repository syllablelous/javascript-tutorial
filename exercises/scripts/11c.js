const normalArray = [1, 20, 22, 24, 5];
const normalArray2 = ["hi", "hello", "good"];
const reversedArray = [];

function arraySwap(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  console.log(reversedArray);
}

arraySwap(normalArray2);
