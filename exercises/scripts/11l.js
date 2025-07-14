const exampleArray1 = [1, -3, 5];
const exampleArray2 = [-2, 3, -5, 7, 10];

function minMax(nums) {
  let result = {
    min: 0,
    max: 0,
  };

  for (let i = 0; i < nums.length; i++) {
    if (result.max < nums[i]) {
      result.max = nums[i];
    }
    if (result.min > nums[i]) {
      result.min = nums[i];
    }
    console.log(result);
  }

  console.log(result);
}

minMax(exampleArray1);
minMax(exampleArray2);
