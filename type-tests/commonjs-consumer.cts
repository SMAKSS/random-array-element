import randomArrayElement = require('@smakss/random-array-element');

const pick = randomArrayElement.default([1, 2, 3]);
const result: number | -1 = pick();
void result;
