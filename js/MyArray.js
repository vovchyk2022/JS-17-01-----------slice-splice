// constructor for prototype

function MyArrayPrototype() {
  this.push = function () { 
    //   this[this.length] = value;
    //       return ++this.length;
    for (let index = 0; index < arguments.length; index++) {
      this[this.length] = arguments[index];
      this.length++;
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    // this.length--;
    return lastItem;
  };
}

//constructor with data
function MyArray() {
  this.length = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     this.push = arguments[index];
//   }
}

MyArray.prototype = new MyArrayPrototype();

const myArrayNumbers = new MyArray(8, 9, 10);
myArrayNumbers.push(777, 5, 6, 7);
console.log(myArrayNumbers);

myArrayNumbers.pop();
console.log(myArrayNumbers);

const arrayNumber = new Array(3, 5, 7);
arrayNumber.push(555);
console.log(arrayNumber);