import hasKeyDeep from 'has-key-deep';
import autoCurry from 'auto-curry';

export const getProperty = (object, key) =>
  (key.length === 1)
    ? object[key[0]]
    : getProperty(object[key[0]], key.slice(1));

const propDeep = (key, object) => {
  if (typeof key === 'string') return propDeep(key.split('.'), object);
  return hasKeyDeep(key, object) ? getProperty(object, key) : undefined;
};

export default autoCurry(propDeep);
