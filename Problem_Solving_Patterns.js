/******************   FREQUENCY COUNTER   ***************/
//***to compare multiple arrays its always better to convert them into obj and then compare 

//1. Givin two arrays, check if all the elements in the first array has its corresponding value squared in the second array.
function isSquared(arr1, arr2) {
  if (arr1.length !== arr2.length || arr1.length === 0) return false;

  const obj1 = makeObj(arr1);
  const obj2 = makeObj(arr2);

  //check if key1 ** 2 == key2  
  for (let key in obj1) {
    if (!(obj2[key ** 2])) return false;
    if (obj2[key ** 2] !== obj1[key]) return false
  }
  return true
}
// console.log(isSquared([1, 2, 3, 1], [4, 1, 9, 1]));

//2. Given two strings, check if they are anagrams 
//**return true/false
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const obj1 = makeObj(str1);
  // const obj2 = makeObj(str2);

  // for (let key in obj1) {
  //   if (!obj2[key]) return false;
  //   if (obj1[key] !== obj2[key]) return false
  // }

  //***alternative solution => use two loops
  for (let i = 0; i < str2.length; i++) {
    if (!obj1[str2[i]]) return false;
    else obj1[str2[i]]--;
  }
  return true
}
// console.log(isAnagram('zaa', 'aaz'));
//makeObj function
function makeObj(inp) {
  const obj = {};
  for (let i = 0; i < inp.length; i++) {
    //if obj key exists counter ++ || else create new counter 
    obj[inp[i]] ? obj[inp[i]]++ : obj[inp[i]] = 1;
  }
  return obj;
}

/************   MULTIPLE POINTERS   ************/



//1. givin a sorted array sum two elements ultil the sum equals to 0
//-- if sum = 0 return the elements
//-- if sum != 0 return undefined

function isZero(arr) {
  let left = 0
  let right = arr.length - 1;
  let sum;
  while (right > left) {
    sum = arr[right] + arr[left];
    if (sum === 0) return [arr[right], arr[left]];
    else if (sum > 0) right--;
    else left++;
  }
  return undefined;
}
// console.log(isZero([-2, -1, 0, 1, 3, 4, 5, 6]));