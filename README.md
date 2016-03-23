propDeep
========

[![Build Status](https://travis-ci.org/ryanaghdam/propDeep.svg?branch=master)](https://travis-ci.org/ryanaghdam/propDeep)

Returns the given deeply-nested property of an object using dot-notation or an
array of keys.

A curried function is produced if only one argument is passed.

Examples
--------

Non-curried invocation:

```
var propDeep = require('prop-deep');

var object = {
  a: {
    b: {
      c: 4
    }
  }
};

propDeep('a.b.c', object);
// => 4

propDeep(['a', 'b', 'c'], object);
// => 4

propDeep('a.b.c.d', object);
// => undefined

propDeep('a.b', object);
// => { c: 4 }
```

Curried invocation:

```
var propDeep = require('prop-deep');

var object = {
  a: {
    b: {
      c: 4
    }
  }
};

propDeep('a.b.c')(object);
// => 4

propDeep(['a', 'b', 'c'])(object);
// => 4

propDeep('a.b.c.d')(object);
// => undefined

propDeep('a.b')(object);
// => { c: 4 }

```



Changelog
---------

v1.0.0: First release
