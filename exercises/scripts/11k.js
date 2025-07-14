const exampleArray1 = [1, -3, 5];
const exampleArray2 = [-2, 3, -5, 7, 10];

function countPositive(nums) {
  let numOfPositives = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      numOfPositives++;
    }
  }

  console.log(numOfPositives);
}

countPositive(exampleArray1);
countPositive(exampleArray2);
