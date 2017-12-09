'use strict';

function find_average(array) {
  return array.reduce((sum, num)=> sum + num) / array.length;
}
