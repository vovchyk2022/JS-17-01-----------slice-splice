// function sum() {
//     console.log("arguments:", arguments)
//     let summa = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         summa += arguments[index];
//         }
//         return summa;
// }

// sum(1,2,3,4);
// console.log(sum(1,2,3,4))

// const arr1 = [10,20,30,40,30,50,30,60];
// const arr2 = [9,12,18];
// const arr3 = arr1.concat(arr2)
// const arr3 = arr1.concat(25,28,19);
// const arr3 = arr1.slice(2,5);
// const key = 3;

// console.log(arr1);
// const arr3 = arr1.splice(2);
// const arr3 = arr1.splice(2,2, 77, 78);
// const arr3 = arr1.splice(2,0, 77, 78);
// console.log(arr1);
// console.log(arr3);

// console.log(arr1.indexOf(key));
// console.log(arr1.indexOf(key,3));
// console.log(arr1.lastIndexOf(key));
// console.log(arr1.includes(key)); // true || false

// Приклад №1 - написати ф-ю,яка буде приймати масив та рядок
// і повертає true, якщо рядок є в масиві
// та false, якщо рядка немає
// врахувати, що масив може бути порожнім

// /**
//  *
//  * @param {[string]} arr
//  * @param {string} str
//  * @returns {boolean}
//  */
// function hasElement(arr, str) {
//   return arr.includes(str);
// }
// console.log(hasElement(["qwe"], "qwe"));

// Приклад №2 - написати ф-ю, яка приймає масив з числами,
// повертає середнє значення усіх елементів масива
// [2,4] =>3 / врахувати, що масив може бути порожнім - повертати null

// Варіант№1
// /**
//  * 
//  * @param {number} arr 
//  * @returns {number | null}
//  */
// function getAverage(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let summa = 0;
//   for (let index = 0; index < array.length; index++) {
//     summa += arr[index];
//   }
//   return summa/arrlength;
// }


// // Варіант№2
// /**
//  * 
//  * @param {number} arr 
//  * @returns {number | null}
//  */
// function getAverage(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
// //   let summa = 0;
// //   for (let index = 0; index < array.length; index++) {
// //     summa += arr[index];
// //   }
//   const summa = arr.reduce(function(result,element){
//     return result + element;
// })
//   return summa/arr.length;
// }



// // // Приклад
// const arr1 = [10,20,30,40,30,50,30,60];
// const arr2 = [9,12,18];

// // const summa = arr2.reduce(function(accumulator,currentValue){
// //     return accumulator * currentValue
// // }, 1000)
// const summa = arr2.reduce(function(accumulator,currentValue,index){
//     return accumulator + (index % 2 ? currentValue:0)
// }, 1000)
// console.log(summa)


// написати функцію, яка приймає масив чисел і повертає true, якщо в цьому масиві є два однакових числа поспіль / якщо немає повертає false, якщо масив порожній то повертає теж false 


