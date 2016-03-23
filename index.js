'use strict';

var hasKeyDeep = require('has-key-deep');

function getProperty(object, key) {
  if (key.length === 1) {
    return object[key[0]];
  } else {
    return getProperty(object[key[0]], key.slice(1));
  }
}

module.exports = function propDeep(key, object) {
  if (typeof key === 'undefined') {
    throw new Error('key is required');
  }

  if (typeof key === 'string') {
    key = key.split('.');
  }

  if (typeof object === 'undefined') {
    return function propDeepCurried(object) {
      return propDeep(key, object);
    }
  }

  if (hasKeyDeep(object, key)) {
    return getProperty(object, key);
  }
};
