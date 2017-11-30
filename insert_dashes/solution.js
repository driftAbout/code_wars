'use strict';

//Simple Long Hand Solution
function insertDash(num) {
  let digit;
  let digits = '';
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++){
    digit = numString.charAt(i);
    if (parseInt(digit) % 2 && parseInt(numString.charAt(i + 1)) % 2){
      digit += '-';
    }
    digits += digit;
  }
  return digits;
}

//Solution Using Array Map
function insertDash(num) {
  return num.toString().split('').map(function(val, i, arr){
    if( parseInt(val) % 2 && parseInt(arr[i + 1]) % 2 ) val += '-';
    return val;
  }).join('');
}

//Solution Using Regex
function insertDash(num) {
  return num.toString().replace(/([13579])(?=([13579]))/g, '$1-');
}
