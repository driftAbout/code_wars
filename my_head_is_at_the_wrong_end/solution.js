'use strict';
//super simple solution
function fixTheMeerkat(arr) {
  //your code here
  return arr.reverse();
}

//Solution using while loop, pop, and push
function fixTheMeerkat(arr) {
 //your code here
 let tempArr = [];
 while (arr.length) {
   tempArr.push(arr.pop());
 }
 return tempArr;
}

//for loop, index backwards
function fixTheMeerkat(arr) {
 //your code here
 let tempArr = [];
 for (let i = 1; i <= arr.length; i++){
   tempArr.push(arr[arr.length - i]);
 }
 return tempArr;
}

// no methods
function fixTheMeerkat(arr) {
 //your code here
  let last = arr[2];
  let first = arr[0];
  arr[0] = last;
  arr[2] = first;
  return arr;
}

//super simple, no methods
function fixTheMeerkat(arr) {
 //your code here
  return [arr[2], arr[1], arr[0]];
}
