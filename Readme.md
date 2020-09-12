# Random array element without repetition

![npm](https://img.shields.io/npm/v/@smakss/random-array-element) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/random-array-element) ![NPM](https://img.shields.io/npm/l/@smakss/random-array-element) ![npm](https://img.shields.io/npm/dt/@smakss/random-array-element) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/random-array-element)

In order to select an element within an array, you can simply use `Math.random()` but what about when you don't want to select an element that selected before. Here this package will came to use.

## How it works?

To install it you can simply do the following command:

```
npm i @smakss/random-array-element
or
yarn add @smakss/random-array-element
```

to include it with common js module you should do this:

```
var randomArrayElement = require('@smakss/random-array-element');
```

and to include it with ECMAscript module you can simply do this one:

```
import randomArrayElement from '@smakss/random-array-element'
```

then to use it within your application you can do it just like this:

```
const chooser = randomArrayElement(['Foo', 'Bar', 'FU', 'FooBar']);
// If the input was not array or was empty the chooser will be equal to -1, so chooser() will throw an error.
chooser() // Foo
chooser() // Bar
chooser() // FU
chooser() // FooBar
chooser() // Foo (only repeats once all items within the array are exhausted.)
```

## Demo

You can check the [working demo](https://runkit.com/smakss/convert-numbers) in runkit.
