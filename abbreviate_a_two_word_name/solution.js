'use strict';

//long hand
function abbrevName(name){
   // code away
   let letters = [];
   let name_parts = name.split(' ')
   for (let i = 0; i < name_parts.length; i++){
     letters.push(name_parts[i].charAt(0).toUpperCase());
   }
   return letters.join('.');
}

//lengthy one-liner using indexOf to find the 'space', then add 1 to that index
function abbrevName(name){
   // code away
    return `${name.charAt(0).toUpperCase()}.${name.charAt((name.indexOf(' ') + 1)).toUpperCase()}`;
}

//shorter one-liner with regex
function abbrevName(name){
   // code away
   return name.replace(/(.).*\s(.).*/,'$1.$2').toUpperCase();
}
