/**
 * Creates a function that returns a random item from a given array without repetition.
 * Once all items have been returned once, the array is reset and shuffled again.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array of items to pick from.
 * @returns {() => T | -1} A function that when called, will return a random item from the array without repeating until all items have been returned.
 *
 * @example
 * const getRandomItem = randomItemWithNoRepetition(['apple', 'banana', 'cherry']);
 * console.log(getRandomItem()); // -> 'banana' (example output)
 * console.log(getRandomItem()); // -> 'apple' (example output)
 * // ...after all items have been returned, it resets.
 * console.log(getRandomItem()); // -> 'cherry' (example output)
 * // ...continues to return a new random item.
 */
function randomItemWithNoRepetition<T>(array: T[]): () => T | -1 {
  if (!Array.isArray(array) || array.length === 0) return () => -1;

  let copyOfArray = array.slice();

  return function (): T | -1 {
    if (copyOfArray.length < 1) {
      copyOfArray = array.slice();
    }

    const index = Math.floor(Math.random() * copyOfArray.length);
    const item = copyOfArray[index];

    copyOfArray.splice(index, 1);
    return item;
  };
}

export default randomItemWithNoRepetition;
