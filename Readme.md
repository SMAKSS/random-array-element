# Random array element without repetition

![npm](https://img.shields.io/npm/v/@smakss/random-array-element) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/random-array-element) ![NPM](https://img.shields.io/npm/l/@smakss/random-array-element) ![npm](https://img.shields.io/npm/dm/@smakss/random-array-element) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/random-array-element)

In order to select an element within an array, you can  simply use `Math.random()` but what about when you don't want to select an element that selected before. Here this package will came to use.

## How it works?

To install it you can simply do the following command:

``` 
npm i @smakss/random-array-element
or
yarn add @smakss/random-array-element
```

to include with `ES5` or common js you can simply do this:

```
var randomArrayElement = require('@smakss/random-array-element');
```

or to include with `ES6` you simply do this one:

```
import randomArrayElement from '@smakss/random-array-element'
```

then to use it within your application you can do it just like this:
```
const chooser = randomArrayElement(['Foo', 'Bar', 'FU', 'FooBar' ]);

chooser() // Foo
chooser() // Bar
chooser() // FU
chooser() // FooBar
chooser() // Foo (only repeats once all items within the array are exhausted.)
```