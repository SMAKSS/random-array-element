import assert from 'node:assert/strict';
import test from 'node:test';
import randomArrayElement from '../dist/esm/index.js';

function withoutCrypto(callback) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'crypto');
  Object.defineProperty(globalThis, 'crypto', {
    configurable: true,
    value: undefined
  });

  try {
    callback();
  } finally {
    if (descriptor) {
      Object.defineProperty(globalThis, 'crypto', descriptor);
    } else {
      delete globalThis.crypto;
    }
  }
}

test('uses rejection sampling to select an array item', (context) => {
  let callCount = 0;
  context.mock.method(globalThis.crypto, 'getRandomValues', (values) => {
    values[0] = callCount++ === 0 ? 0xffffffff : 2;
    return values;
  });

  const getRandomElement = randomArrayElement(['a', 'b', 'c']);

  assert.equal(getRandomElement(), 'c');
  assert.equal(callCount, 2);
});

test('throws when secure randomness is unavailable', () => {
  withoutCrypto(() => {
    const getRandomElement = randomArrayElement(['a']);

    assert.throws(getRandomElement, /Secure randomness is unavailable/);
  });
});
