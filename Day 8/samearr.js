let check = (arr, brr) => {
  let l1 = arr.length;
  let l2 = brr.length;
  if (l1 != l2) return false;
  for (let i = 0; i < l1; i++) {
    if (arr[i] != brr[i]) {
      return false;
    }
  }
  return true;
};


let arr = [1,2];
let arr2 = [1,2];
console.log(check(arr, arr2));// => true
let arr3 = [1,2];
let arr4 = [1,8];
console.log(check(arr3, arr4));//=> false