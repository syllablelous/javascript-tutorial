const arrayExample = [1, 2, 3];

const newArray = [];

for (let i = 0; i < arrayExample.length; i++) {
  const newNum = arrayExample[i] + 1;
  newArray.push(newNum);
}

console.log(newArray);
