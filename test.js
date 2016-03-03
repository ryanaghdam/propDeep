var assert = require('assert');
var propDeep = require('./');

describe('propDeep()', function () {
  describe('invalid input', function () {
    it('should throw an error when object is not given', function () {
      assert.throws(function () {
        propDeep(undefined, 'a.b.c');
      }, /object is required/);
    });

    it('should throw an error when key is not given', function () {
      assert.throws(function () {
        propDeep({});
      }, /key is required/);
    });
  });

  describe('valid input, property exists', function () {
    context('key provided in array notation', function () {
      it('should return the value at the given key', function () {
        assert.equal(propDeep({ a: { b: { c: 4 } } }, ['a', 'b', 'c']), 4, 'expected 4');
      });
    });

    context('key provided in dot notation', function () {
      it('should return the value at the given key', function () {
        assert.equal(propDeep({ a: { b: { c: 4 } } }, 'a.b.c'), 4, 'expected 4');
      });
    });
  });

  describe('valid input, property does not exist', function () {
    context('key provided in dot notation', function () {
      it('should return undefined ', function () {
        assert.equal(propDeep({}, 'a.b.c'), undefined, 'expected undefined');
      });
    });

    context('key provided in array notation', function () {
      it('should return undefined ', function () {
        assert.equal(propDeep({}, ['a','b']), undefined, 'expected undefined');
      });
    });
  });
});
