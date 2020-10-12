# Random array element without repetition

![npm](https://img.shields.io/npm/v/@smakss/random-array-element) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/random-array-element) ![NPM](https://img.shields.io/npm/l/@smakss/random-array-element) ![npm](https://img.shields.io/npm/dt/@smakss/random-array-element) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/random-array-element)

In order to select an element within an array, you can simply use `Math.random()` but what about when you don't want to select an element that selected before. Here this package will come to use. This package works with simple closure, so you can simply invoke randomArrayElement once everywhere in your project then use it to generate random elements from your array no matter your array is flat or nested, it will choose a random unique element from your array until all the array element get exhausted.

## How it works?

To install it you can simply do the following command:

```bash
npm i @smakss/random-array-element
or
yarn add @smakss/random-array-element
```

to include it with common js module you should do this:

```js
var randomArrayElement = require('@smakss/random-array-element');
```

and to include it with ECMAscript module you can simply do this one:

```js
import randomArrayElement from '@smakss/random-array-element';
```

then to use it within your application you can do it just like this:

```js
const chooser = randomArrayElement();

// Result: -1
// If the input was not array or was empty the chooser will be equal to -1, so chooser() will throw an error.
```

```js
const chooser = randomArrayElement(['Foo', 'Bar', 'FU', 'FooBar']);

chooser();
// Result: Foo

chooser();
// Result: Bar

chooser();
// Result: FU

chooser();
// Result: FooBar

chooser();
// Result: Foo
// Only repeats, once all items within the array are exhausted.
```

## Demo

You can check the [working demo](https://runkit.com/smakss/random-array-element) in runkit.
