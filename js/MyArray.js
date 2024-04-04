
// constructor for prototype
function MyArrayPrototype() {
    this.push = function () {
    };
    this.pop = function () {
    }
this.reverse = function(){
    }
    }

    // cтворити новий екземпляр нашого масиву
    const newMyArray = new MyArray();
    // зпушити в нього елементи з поточного масиву у зворотньому порядку 
    for (let i = this.length-1; i >=0; i--) {newMyArray.push(this[i])
    }
    for (let i = 0, i < this.length; i++){
        this[i] = newMyArray[i];
    }
    // повернути новий екземпляринашого масиву
    return newMyArray;  


  //constructor with data
  function MyArray() {
      this.length = 0;
      for (let i = 0; i < arguments.length; i++) {
        this.push(arguments[i]);
      }

  }
  
  MyArray.prototype = new MyArrayPrototype();
  

  const myArrayNumbers = new MyArray(4,5,8,9);
  myArrayNumbers.push(777);
const newMyArrayReverse = MyArrayPrototype.reverse();  console.log(myArrayNumbers);

  // myArrayNumbers.pop();
  // myArrayNumbers.pop();
  // console.log(myArrayNumbers);

  // const arrayNumbers = [1,2,5,8];
  // arrayNumbers.push(555);
  // console.log(arrayNumbers);  