/******   FREQUENCY COUNTER   *******/
//***to compare multiple arrays its always better to convert them into obj and then compare 

//Make obj function
function makeObj(inp) {
  const obj = {};
  for (let i = 0; i < inp.length; i++) {
    //if obj key exists counter ++
    if (obj[inp[i]]) obj[inp[i]]++;
    //else create new counter 
    else obj[inp[i]] = 1;
  }
  return obj;
}

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
// console.log(isSquared([1, 2, 3], [4, 1, 9]));

//2. Given two strings, check if they are anagrams 
//**return true/false
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const obj1 = makeObj(str1);
  const obj2 = makeObj(str2)
  for (let key in obj1) {
    if (!obj2[key]) return false;
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}
// console.log(isAnagram('zaa', 'aaz'));



