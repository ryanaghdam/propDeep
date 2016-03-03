propDeep
========

[![Build Status](https://travis-ci.org/ryanaghdam/propDeep.svg?branch=master)](https://travis-ci.org/ryanaghdam/propDeep)

Returns the given deeply-nested property of an object using dot-notation or an
array of keys.

Examples
--------

```
var propDeep = require('prop-deep');

var object = {
  a: {
    b: {
      c: 4
    }
  }
};

propDeep(object, 'a.b.c');
// => 4

propDeep(object, ['a', 'b', 'c']);
// => 4

propDeep(object, 'a.b.c.d');
// => undefined

propDeep(object, 'a.b');
// => { c: 4 }
```

Changelog
---------

v1.0.0: First release
