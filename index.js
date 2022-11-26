'use strict';

// 1) Написати функцію струлку,
// яка приймає безліч аргументів і повертає їх добуток.
/**
 *
 * @param  {...number} arr
 * @returns {number}
 */
const mult = (...num) => num.reduce((result, value) => result * value);

console.log(mult(1, 2, 3, 4, 5));




// 2) Є масив чисел, треба написати функцію, яка повертає масив з двох елементів,
// які є мінімальним і максимальним значенням джерельного масиву.

const arrNum = [1, 2, 3, 5, 4, 1, 2];
/**
 *
 * @param {[number]} arr
 * @returns {[number]}
 */
const minMaxNumber1 = (arr) => [Math.max(...arr), Math.min(...arr)];
console.log(minMaxNumber1(arrNum));

//************** */



const arrNumClon1 = arrNum.slice(0);
/**
 *
 * @param {[number]} arr
 * @returns {[number]}
 */
const minMaxNumber2 = (arr) =>
  arr
    .splice(arr.indexOf(Math.max(...arr)), 1)
    .concat(arr.splice(arr.indexOf(Math.min(...arr)), 1));

console.log(minMaxNumber2(arrNumClon1));

//************** */

const arrNumClon2 = arrNum.slice(0);

/**
 *
 * @param {[number]} arr
 * @returns {[number]}
 */
const minMaxNumber3 = (arr) => {

  arr.sort((current, next) => (current < next ? -1 : 1));
  return arr.splice(-1, 1).concat(arr.splice(0, 1));
};

console.log(minMaxNumber3(arrNumClon2));

//************** */
const arrNumClon3 = arrNum.slice(0);

/**
 *
 * @param {[number]} arr
 * @returns {[number]}
 */
const minMaxNumber4 = (arr) => {

  arr.sort((current, next) => (current < next ? -1 : 1));
  return [arr[arr.length - 1], arr[0]];
};

console.log(minMaxNumber4(arrNumClon3));

//************** */

/**
 *
 * @param {[number]} arr
 * @returns {[number]}
 */
 const minMaxNumber5 = (arr) => [
  arr.reduce((current, next) => Math.max(...arr)),
  arr.reduce((current, next) => Math.min(current, next)),
];

console.log(minMaxNumber5(arrNum));

