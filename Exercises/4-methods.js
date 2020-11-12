'use strict';

const methods = iface => {
  const res = [];
  for (const prop in iface) {
    if (typeof iface[prop] === 'function') {
      res.push([iface[prop].name, iface[prop].length]);
    }
  }
  return res;
};

module.exports = { methods };
