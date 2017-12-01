'use strict';

function validateUsr(username) {
  res = /^[a-z\d_]{4,16}$/.test(username);
  return res;
}
