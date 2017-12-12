'use strict';

function cubeOdd(arr) {
  if (arr.some(num => isNaN(num))) return undefined;
  return arr.map(num => Math.pow(num, 3)).reduce((total, val) => (val % 2) ? total + val : total, 0)
}
