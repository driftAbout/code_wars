'use strict';

//Solution using array.filter()
function formatWords(words){
  if(!words) return '';
  words = words.filter(val=>val);
  return  (words.length > 1) ? `${words.slice(0,-1).join(', ')} and ${words.pop()}` : words.toString();
}

//Solution using string.match() and regex
function formatWords(words){
  words =  words ? words.toString() : false;
  return words ?  words.match(/\w+/g).join(', ').replace(/, (\w+$)/g, ' and $1') : '';
}

//Solution using string.replace and regex
function formatWords(words){
  return words ? words.join(' ').trim().replace(/(\s+)/g, ', ').replace(/, (\w+$)/g, ' and $1') : '';
}
