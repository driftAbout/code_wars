'use strict';

//Solution using forEach method and string concatenation
function solution(str) {
  let r_str = "";
  str.split('').forEach(val => r_str = `${val}${r_str}`);
  return r_str;
}

//Solution using split map and pop
function solution(str){
  str = str.split('')
  return str.slice().map(()=>str.pop()).join('')
}

//Solution using while loop to push values to an array
function solution(str){
let arr = [];
  str = str.split('')
 while (str.length) {
  arr.push( str.pop());
 }
 return arr.join('')
}

//Solution using recursive function to push values to an array
function solution(str) {
  function reverse(str_arr) {
    arr.push(str_arr.pop());
    if (!str_arr.length) return;
    reverse(str_arr);
  }
  arr = [];
  reverse(str.split(''));
	return arr.join('') ;
}

//Solution using the array reduce() method
function solution(str) {
 return str.match(/.?/g).reduce((acc, val) => val + acc);
}
