var assert = require('assert');
var propDeep = require('./');

describe('propDeep()', function () {
  context('non-curried invocation', function () {
    describe('invalid input', function () {
      it('should throw an error when key is not given', function () {
        assert.throws(function () {
          propDeep(undefined, {});
        }, /key is required/);
      });
    });

    describe('valid input, property exists', function () {
      context('key provided in array notation', function () {
        it('should return the value at the given key', function () {
          assert.equal(propDeep(['a', 'b', 'c'], { a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });

      context('key provided in dot notation', function () {
        it('should return the value at the given key', function () {
          assert.equal(propDeep('a.b.c', { a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });
    });

    describe('valid input, property does not exist', function () {
      context('key provided in dot notation', function () {
        it('should return undefined ', function () {
          assert.equal(propDeep('a.b.c.', {}), undefined, 'expected undefined');
        });
      });

      context('key provided in array notation', function () {
        it('should return undefined ', function () {
          assert.equal(propDeep(['a','b'], {}), undefined, 'expected undefined');
        });
      });
    });
  });

  context('curried invocation', function () {
    describe('invalid input', function () {
      it('should throw an error when key is not given', function () {
        assert.throws(function () {
          propDeep();
        }, /key is required/);
      });
    });

    describe('valid input', function () {
      it('should return a function when given a key in array notation', function () {
        assert.equal(typeof propDeep(['a', 'b', 'c']), 'function', 'expected a function');
      });

      it('should return a function when given a key in dot notation', function () {
        assert.equal(typeof propDeep('a.b.c'), 'function', 'expected a function');
      });
    });

    describe('propDeepCurried()', function () {
      context('valid object input', function () {
        it('should return true when the property exists', function () {
        });

        it('should return false when the property does not exist', function () {
        });
      });

      context('invalid object input', function () {
      });
    });

    describe('valid input, property exists', function () {
      context('key provided in array notation', function () {
        it('should return the value at the given key', function () {
          assert.equal(propDeep(['a', 'b', 'c'])({ a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });

      context('key provided in dot notation', function () {
        it('should return the value at the given key', function () {
          assert.equal(propDeep('a.b.c')({ a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });
    });

    describe('valid input, property does not exist', function () {
      context('key provided in dot notation', function () {
        it('should return undefined ', function () {
          assert.equal(propDeep('a.b.c', {}), undefined, 'expected undefined');
        });
      });

      context('key provided in array notation', function () {
        it('should return undefined ', function () {
          assert.equal(propDeep(['a','b'], {}), undefined, 'expected undefined');
        });
      });
    });
  });

});
