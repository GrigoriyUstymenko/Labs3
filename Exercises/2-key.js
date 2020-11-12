'use strict';

const generateKey = (length, possible) => {
  const base = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * base);
    key += possible[rand];
  }
  return key;
};

module.exports = { generateKey };
