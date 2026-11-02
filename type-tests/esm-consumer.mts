import randomArrayElement from '@smakss/random-array-element';

const pick = randomArrayElement([1, 2, 3]);
const result: number | -1 = pick();
void result;
