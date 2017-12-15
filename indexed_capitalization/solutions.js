'use strict';

//Solution Using reduce(), and forEach()
function capitalize(s,arr){
 return [s].reduce(acc => {
	arr.forEach(val => { if (acc[val]) acc[val] = acc[val].toUpperCase()});
  return acc.join('')},s.split(''));
};


//Solution using split() and reduce
function capitalize(s,arr){
  return s.split('').reduce((acc,cur,i) => arr.includes(i) ? acc + cur.toUpperCase() : acc + cur, '');
};


//Solution using Array.from() and some()
function capitalize(s,arr){
  return Array.from(s, (val,i) => arr.some(val => val === i ) ? val.toUpperCase() : val).join('');
};


//Solution using Array.from() and includes()
function capitalize(s,arr){
  return Array.from(s, (val,i) => arr.includes(i) ? val.toUpperCase() : val).join('');
};
