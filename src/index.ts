/**
 * Returns an unbiased random index using the Web Crypto API.
 *
 * @param max - The exclusive upper bound for the random index.
 * @returns A secure random integer from 0 to max - 1.
 */
function getSecureRandomIndex(max: number): number {
  if (!Number.isSafeInteger(max) || max < 1 || max > 0x1_0000_0000) {
    throw new RangeError(
      'max must be a positive safe integer no greater than 2^32.'
    );
  }

  const cryptoProvider = globalThis.crypto;
  if (!cryptoProvider?.getRandomValues) {
    throw new Error('Secure randomness is unavailable in this environment.');
  }

  const range = 0x1_0000_0000;
  const limit = range - (range % max);
  const randomValue = new Uint32Array(1);

  do {
    cryptoProvider.getRandomValues(randomValue);
  } while (randomValue[0] >= limit);

  return randomValue[0] % max;
}

/**
 * Creates a function that returns a random item from a given array without repetition.
 * Once all items have been returned once, the array is reset and selections begin again.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array of items to pick from.
 * @returns {() => T | -1} A function that returns a random item without repeats until all items have been returned.
 */
function randomItemWithNoRepetition<T>(array: T[]): () => T | -1 {
  if (!Array.isArray(array) || array.length === 0) return () => -1;

  let copyOfArray = array.slice();

  return function (): T | -1 {
    if (copyOfArray.length < 1) {
      copyOfArray = array.slice();
    }

    if (copyOfArray.length < 1) return -1;

    const index = getSecureRandomIndex(copyOfArray.length);
    const item = copyOfArray[index];

    copyOfArray.splice(index, 1);
    return item;
  };
}

export default randomItemWithNoRepetition;
