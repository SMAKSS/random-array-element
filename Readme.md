# Random Array Element without Repetition

![npm](https://img.shields.io/npm/v/@smakss/random-array-element) ![NPM](https://img.shields.io/npm/l/@smakss/random-array-element) ![npm](https://img.shields.io/npm/dt/@smakss/random-array-element) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/random-array-element)

Selecting a random element from an array is simple with `Math.random()`. However, if you need to ensure that each element is only selected once until all elements have been chosen, `@smakss/random-array-element` is the ideal solution. Utilizing closures, this package allows you to initialize a function once and then repeatedly obtain unique, randomly-selected elements from your array, without repeats until the array is exhausted.

## Demo

You can check the [working demo](https://runkit.com/smakss/random-array-element) on RunKit.

or

[![View @smakss/random-array-element](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-random-array-element-7yizos?fontsize=14&hidenavigation=1&theme=dark)

## Installation

Install the package using npm or Yarn:

```bash
npm i @smakss/random-array-element
# or
yarn add @smakss/random-array-element
```

## Usage

To include it with CommonJS module you can do this:

```js
const randomArrayElement = require('@smakss/random-array-element');
```

For ECMAScript modules:

```js
import randomArrayElement from '@smakss/random-array-element';
```

Example usage:

```js
// Initialize once for an array
const getRandomElement = randomArrayElement(['apple', 'banana', 'cherry']);

console.log(getRandomElement()); // Result: 'banana' (example output)
console.log(getRandomElement()); // Result: 'apple' (example output)
// ...after all items have been returned, it resets.
console.log(getRandomElement()); // Result: 'cherry' (example output)
// ...continues to return a new random item.
```

If an empty or non-array input is passed, the function will return -1, indicating no selection can be made:

```js
const getRandomElement = randomArrayElement([]);
console.log(getRandomElement()); // Result: -1
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

To ensure a welcoming and safe community, our [Code of Conduct](./CODE_OF_CONDUCT.md) outlines expected behaviors for all participants.
