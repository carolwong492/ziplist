function zipList(arr1, arr2) {
  const returnList = [];
  for (let i = 0; i < arr1.length; i++) {
    returnList.push(arr1[i]);
    returnList.push(arr2[i]);
  }
  return returnList;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

const testArr1 = ['a', 'b', 'c'];
const testArr2 = [1, 2, 3];

console.log(zipList(testArr1, testArr2));
console.log(zipListTheSimpleWay(testArr1, testArr2));
