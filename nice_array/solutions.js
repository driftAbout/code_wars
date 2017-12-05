'use strict';
//Solution using array.every()
function isNice(arr){
  if(!arr.length) return false;
  return arr.every(val=> arr.includes( val + 1) || arr.includes( val - 1));
}

//Solution using array.IndexOf()
function isNice(arr){
  if(!arr.length) return false;
  for (let i = 0; i < arr.length; i++){
    if (arr.indexOf(arr[i] + 1) === -1 && arr.indexOf(arr[i] - 1) === -1) return false;
  }
  return true;
}


//Soultion using basic javascript
function isNice(arr){
  if(!arr.length) return false;
  let nice_arr = [];
  arr.forEach(val=> nice_arr[val] = val);
  for (let i = 0; i < arr.length; i++){
    if (nice_arr[arr[i] + 1] === undefined && nice_arr[arr[i] - 1] === undefined) return false;
  }
  return true;
}
