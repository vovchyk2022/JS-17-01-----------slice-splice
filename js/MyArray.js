
// // constructor for prototype
// function MyArrayPrototype() {
//     this.push = function () {
//       for (let index = 0; index < arguments.length; index++) {
//         this[this.length++] = arguments[index];
//        // this.length++;
        
//       }
//       return this.length;
//     }

//     //виправити щоб не було від'ємної довжини
//     this.pop = function(){
//       if(this.length ===0 ) {
//         return;
//       }   const lastItem = this[this.length - 1];
//       delete this[--this.length];
//       // this.length--;
//       return lastItem;
//     }
//   }
 
//   //constructor with data
//   function MyArray() {
//       this.length = 0;
//       for (let index = 0; index < arguments.length; index++) {
//         this.push(arguments[index]);
//       }
//   }
  
//   MyArray.prototype = new MyArrayPrototype();
  

//   const myArrayNumbers = new MyArray(4,5,8,9);
//   myArrayNumbers.push(777);
//   console.log(myArrayNumbers);

//   myArrayNumbers.pop();
//   myArrayNumbers.pop();
//   console.log(myArrayNumbers);

//   const arrayNumbers = [1,2,5,8];
//   arrayNumbers.push(555);
//   console.log(arrayNumbers);  