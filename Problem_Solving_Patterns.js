/******   FREQUENCY COUNTER   *******/
//1. Givin two arrays, check if all the elements in the first array has its corresponding value squared in the second array.

//to compare multiple arrays its always better to convert them into obj and then compare 

function isSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const obj1 = makeObj(arr1);
  const obj2 = makeObj(arr2);

  //check if key1 ** 2 == key2  
  for (let key in obj1) {
    if (!(obj2[key ** 2])) return false;
    if (obj2[key ** 2] !== obj1[key]) return false
  }
  return true
}

const result1 = isSquared([1, 2, 3], [4, 1, 9])
console.log(result1);

function makeObj(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    //if obj key exists counter ++
    if (obj[arr[i]]) obj[arr[i]]++;
    //else create new counter 
    else obj[arr[i]] = 1;
  }
  return obj;
}
