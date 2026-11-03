# Random Array Element without Repetition

![npm](https://img.shields.io/npm/v/@smakss/random-array-element) ![NPM](https://img.shields.io/npm/l/@smakss/random-array-element) ![npm](https://img.shields.io/npm/dt/@smakss/random-array-element) ![npm unpacked size](https://img.shields.io/npm/unpacked-size/%40smakss%2Frandom-array-element)

If you need to ensure that each element is selected only once until all elements have been chosen, `@smakss/random-array-element` lets you initialize a function and repeatedly obtain unique selections without repeats until the array is exhausted. It uses the Web Crypto API for selection and throws if secure randomness is unavailable.

Node.js 20 or later is required. In browsers, the Web Crypto API must be available.

## Demo

[![View @smakss/random-array-element](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-random-array-element-7yizos?fontsize=14&hidenavigation=1&theme=dark)

## Installation

Install the package using npm or pnpm:

```bash
npm install @smakss/random-array-element
# or
pnpm add @smakss/random-array-element
```

## Usage

To include it with CommonJS module you can do this:

```js
const { default: randomArrayElement } = require('@smakss/random-array-element');
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

## Local playground

This repository includes a Vite playground linked to the package through the pnpm workspace. Try the current local build without publishing a package version:

```sh
pnpm install
pnpm run dev:playground
```

To build the playground app, run this from the package root:

```sh
pnpm run build:playground
```
