propDeep
========

[![Build Status](https://travis-ci.org/ryanaghdam/propDeep.svg?branch=master)](https://travis-ci.org/ryanaghdam/propDeep)

Returns the given deeply-nested property of an object using dot-notation or an
array of keys.

A curried function is produced if only one argument is passed.

Installation
------------

Yarn:

```
$ yarn add prop-deep
```

NPM:

```
$ npm install --save prop-deep
```

Examples
--------

Non-curried invocation:

```
import propDeep from 'prop-deep';

const object = {
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
import propDeep from 'prop-deep';

const object = {
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

- v3.0.1: Updates README examples to use ES6 imports and const. (8/31/17)
- v3.0.0: Re-written with ES6 and auto-curry. No error on invalid input. (8/31/17)
- v2.1.2: Adds NPM scripts for releasing and GitHub link in `package.json`. (6/23/16)
- v2.1.1: fixes compatibility with new has-prop-deep. (6/20/16)
- v2.1.0: Updates `has-key-deep` dependecy to `^2.1.0`. (6/20/16)
- v2.0.0: Reverses argument order.  Adds support for partial application.
- v1.0.0: First release
