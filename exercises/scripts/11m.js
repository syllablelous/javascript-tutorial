const edgeCase1 = [];
const edgeCase2 = [3];

function minMax(nums) {
  let result = {
    min: 0,
    max: 0,
  };

  if (nums.length <= 1) {
    result.max = nums[0];
    result.min = nums[0];
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (result.max < nums[i]) {
        result.max = nums[i];
      }
      if (result.min > nums[i]) {
        result.min = nums[i];
      }
      console.log(result);
    }
  }

  console.log(result);
}

minMax(edgeCase1);
minMax(edgeCase2);
// returns undefined, not null
