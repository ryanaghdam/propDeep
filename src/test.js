import { equal } from 'assert';
import propDeep from './index.js';

describe('propDeep()', () => {
  context('non-curried invocation', () => {
    describe('valid input, property exists', () => {
      context('key provided in array notation', () => {
        it('should return the value at the given key', () => {
          equal(propDeep(['a', 'b', 'c'], { a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });

      context('key provided in dot notation', () => {
        it('should return the value at the given key', () => {
          equal(propDeep('a.b.c', { a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });
    });

    describe('valid input, property does not exist', () => {
      context('key provided in dot notation', () => {
        it('should return undefined ', () => {
          equal(propDeep('a.b.c.', {}), undefined, 'expected undefined');
        });
      });

      context('key provided in array notation', () => {
        it('should return undefined ', () => {
          equal(propDeep(['a','b'], {}), undefined, 'expected undefined');
        });
      });

      context('earlier key is undefined', () => {
        it('should return undefined ', () => {
          equal(propDeep(['a', 'b', 'c'], { a: undefined }), undefined, 'expected undefined');
        });
      });
    });
  });

  context('curried invocation', () => {
    describe('valid input', () => {
      it('should return a function when given a key in array notation', () => {
        equal(typeof propDeep(['a', 'b', 'c']), 'function', 'expected a function');
      });

      it('should return a function when given a key in dot notation', () => {
        equal(typeof propDeep('a.b.c'), 'function', 'expected a function');
      });
    });

    describe('valid input, property exists', () => {
      context('key provided in array notation', () => {
        it('should return the value at the given key', () => {
          equal(propDeep(['a', 'b', 'c'])({ a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });

      context('key provided in dot notation', () => {
        it('should return the value at the given key', () => {
          equal(propDeep('a.b.c')({ a: { b: { c: 4 } } }), 4, 'expected 4');
        });
      });
    });

    describe('valid input, property does not exist', () => {
      context('key provided in dot notation', () => {
        it('should return undefined ', () => {
          equal(propDeep('a.b.c')({}), undefined, 'expected undefined');
        });
      });

      context('key provided in array notation', () => {
        it('should return undefined ', () => {
          equal(propDeep(['a','b'])({}), undefined, 'expected undefined');
        });
      });

      context('earlier key is undefined', () => {
        it('should return undefined ', () => {
          equal(propDeep(['a', 'b', 'c'])({ a: undefined }), undefined, 'expected undefined');
        });
      });
    });
  });
});
