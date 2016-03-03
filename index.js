'use strict';

var hasKeyDeep = require('has-key-deep');

function getProperty(object, key) {
  if (key.length === 1) {
    return object[key[0]];
  } else {
    return getProperty(object[key[0]], key.slice(1));
  }
}

module.exports = function propDeep(object, key) {
  if (typeof object === 'undefined') {
    throw new Error('object is required');
  }

  if (typeof key === 'undefined') {
    throw new Error('key is required');
  }

  if (typeof key === 'string') {
    key = key.split('.');
  }

  if (hasKeyDeep(object, key)) {
    return getProperty(object, key);
  }
};
