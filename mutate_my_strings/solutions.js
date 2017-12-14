'use strict';

//Solution using substring and reduce
function mutateMyStrings(stringOne, stringTwo){
  return stringOne.split('').reduce((acc, cur, i) => (cur != stringTwo[i]) ? `${acc}${stringTwo.substr(0, i + 1)}${stringOne.substr(i + 1)}\n` : acc, `${stringOne}\n`)
}
