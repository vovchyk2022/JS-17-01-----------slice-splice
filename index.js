// let count = 0;
// while (count <= 20) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count++;
//  }

// let count = 0;
// while (true) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count++;
//   if (count>20)break;
// }

// let count = 0;
// while (true) {
//     if(count % 2){
//         count++
//         continue;
//     }
//     console.log(count++);
//     if (count>20)break;
// }

// for (let i=0; i<=20; i++) {
//     if (i % 2) continue;
//     console.log(i);
// }

// for (let i=0; i<=20; i+=2) {
//     if (i % 2) continue;
//     console.log(i);
// }

// // Task1 користувач має увести якесь число, потрібно запитати велику кількість разів

// while (true) {
//   const userInput = prompt("Enter number");
//   if (userInput === "" ||
//    userInput === null ||
//    Number.isNaN(Number(userInput)))
//    {
//     console.log('try again');
//     continue;
//    }
//   console.log(userInput);
//   break;
// }

// // Task2 користувач вводить пін до правильного результату, к-ть спроб 3 шт
// // Варіант1

// const PIN = "1111";
// const MAX_TRY = 3;
// let amount_try = 0;
// while (true) {
// if(amount_try++ > MAX_TRY) {
//     console.log("Atempts ended");
//     break;
// }
//     if (prompt("Enter pin") === PIN) {
//     console.log("Welcome");
//     break;
//     }
//     amount_try++;
// }

// // Варіант2
// const PIN = "1111";
// const MAX_TRY = 3;
// let amount_try = 0;
// for (let i = 0; i < MAX_TRY; i++) {
//   if (prompt("Enter pin") === PIN) {
//     console.log("Welcome");
//     break;
//   }
//   console.log(MAX_TRY-i-1);
// }


// розрахувати факторіал числа 5 = 1*2*3*4*5

/**
 * 
 * @param {number} number 
 * @returns {number | BigInt | null}
 */
const calcFactorial = function(number=5) {
if(number<0){
    return null;
}
if(number === 0 || number ===1){
    return 1;
}

let result = 1n;
for(let i=1n; i<=number; i++){
result *=i;
}
return result;
}

console.log(calcFactorial()) 
console.log(calcFactorial(10)) 
console.log(calcFactorial(50)) 


// 