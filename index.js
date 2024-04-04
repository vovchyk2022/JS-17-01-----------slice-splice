// // not modify
// // indexOf
// // lastIndexOf
// // includes
// // reduce
// // concat
// // slice
// // find, findIndex, findLast, findLastIndex

// // modify:
// // push
// // pop
// // reverse
// // unshit
// // shift
// // splice
// // sort

// const arr1 = [10,20,30,40,50,60,70,80];
// const result1 = arr1.slice(3);
// console.log(arr1);
// console.log(result1);

// const arr2 = [10,20,30,40,50,60,70,80];
// const result2 = arr2.slice(3);
// console.log(arr2);
// console.log(result2);

// const arr2 = [10,20,30,40,50,60,70,80];
// const result2 = arr2.splice(3);
// console.log(arr2);
// console.log(result2);

// // Варіант1 - вивести перший елемент, що відповідає умові
// const arr3 = [10,20,30,40,50,60,70,80];
// const result3 = arr3.find(function (currentElement){
//     return currentElement > 4;
// });
// console.log(arr3);
// console.log(result3);

// // Варіант2 - вивести перший елемент, що відповідає умові
// const arr3 = [10,20,30,40,50,60,70,80];
// for (let i = 0; i < arr3.length; i++) {
//   if(arr3[i] > 4){
//   console.log(arr3[i]);
// }
// }

// const arr3 = [10,20,30,40,50,60,70,80];
// const result4 = arr3.reverse(function (currentElement){
//     return currentElement > 4;
// });
// console.log(arr3);
// console.log(result4);

// //написати ф-ю, яка приймає два параметри: мінімум і максимум діапазону
// // повертає масив, значення якого будуть усі числа з діапазону, включаючи мінімум і макимум
// //третій необов'язковий аргумент ф-ї приймає крок для визначення елементів
// // за замовчуванням крок = 1

// function getArrayByRange(min,max,step=1){
//     const arr = [];
//     for (let i= min; i <=max; i+=step){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(getArrayByRange(3,108,10));

// const arr1 = new Array(5);
// // arr1.fill('!')
// const arr1 = new Array(5).fill('!').concat(1,2,3).reverse();
// console.log(arr1);
// arr1.splice(5,0,44,55);
// console.log(arr1);

// Задача - повернути ім'я користувача, якому менше 30 років
const users = [
  { name: "Brad", age: 59 },
  { name: "Tom", age: 30 },
  { name: "Pol", age: 59 },
  { name: "Bob", age: 20 },
  { name: "Bill", age: 22 },
];

// //Варіант1
// const userName = users.find(checkAge).name;
// console.log(userName);

// function checkAge(currentElement){
// return currentElement.age <30;
// }

// // Варіант2
// const userName = users.find(function(user){
//     return user.age <30;
// }).name;
// console.log(userName);

// // Варіант3 - повернути ім'я усіх користувачів віком до 30
// const validateUsers = [];
// for (let index = 0; index < users.length; index++) {
//   if (checkAge(users[index])) {
//     validateUsers.push(users[index]);
//   }
// }
// console.log(validateUsers);
// function checkAge(currentElement) {
//   return currentElement.age < 30;
// }

// // Варіант3.1 - усіх користувачів віком до 30

// const validateUsers = users.filter(function(user){
//     return user.age <30;
// })
// console.log(validateUsers);

// const userNames = users.map(function(user){
//     return user.name;
// })
// console.log(userNames);

// const validateUsersNames = users.filter(checkAge).map(getName);
// console.log(validateUsersNames);

// function checkAge(currentElement){
//     return currentElement.age < 30;
// }

// function getName(currentElement) {
//     return currentElement.name;
// }


// Завдання - отримати методом масивів суму парних чисел
const key = 3;
const arr1 = [1,2,8,4,3,6,3,8,9,3,3];
// // відібрати парні - filter 
// // порахувати суму - reduce
// const summaEvenValues = arr1
//   .filter(function (elem) {
//     return elem % 2 === 0;
//   })
//   .reduce(function (accum, elem) {
//     return accum + elem;
//   });
// console.log(summaEvenValues);

// знайти скільки разів зустрічається ключ
// відібрати значення, які дорівнюють ключу
// порахувати к-ть
const countKey = arr1.filter(function(elem) {
   return elem === key; 
}).length;
// повернути масив з непустим значенням
const arr2 = [undefined,1,2,8,4,3,undefined,6,3,8,9,3,3,null];
const notEmptyValueArray = arr2.filter(function(elem){return elem})



