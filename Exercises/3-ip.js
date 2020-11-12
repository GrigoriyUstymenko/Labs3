'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + Number(item);
  return ip.split('.').reduce(fn, 0);
};


module.exports = { ipToInt };
