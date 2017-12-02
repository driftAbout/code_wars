'use strict';

//******************************//
// Basic Solution using forEach()
function capitalize(s){
  let odd ='';
  let even ='';
  s.split('').forEach((val, i) =>
    (i % 2) ? (odd += val.toUpperCase(), even += val) : (even += val.toUpperCase(), odd += val)
  );
  return [even, odd];
};


//**************************//
//Solution Using array.map()
function capitalize(s){
  function odd_to_UpperCase(val, i, arr){
  if (i % 2) return val.toUpperCase();
  return val;
}

function even_to_UpperCase(val, i, arr){
  if (i % 2) return val;
  return val.toUpperCase();
}

return [s.split('').map(even_to_UpperCase).join(''), s.split('').map(odd_to_UpperCase).join('')];
};


//*****************************************//
//Solution Using string.replace() with Regex
function capitalize(s){
  let evenLetters = (match, p1, p2) => {return `${p1.toUpperCase()}${p2 ? p2 : ''}`};
  let oddLetters = (match, p1, p2) => {return `${p1}${ p2 ? p2.toUpperCase() : ''}`};
  return[s.replace(/(.)(.)?/g, evenLetters), s.replace(/(.)(.)?/g, oddLetters)]
};
