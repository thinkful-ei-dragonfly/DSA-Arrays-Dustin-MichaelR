const mem = require('./memory');

const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this.capacity = 0; 
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this.capacity) {
      this._resize(this.length + 1 * Array.SIZE_RATIO);
    } //<=

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this.capacity = size; //<=
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index doesn't exist");
    }
    return memory.get(this.ptr + index);
  }
  pop() {
    if (this.length === 0) {
      throw new Error('Index Error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index Error');
    }
    if (this.length >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index Error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr.get(0));

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');

  console.log(arr.get(0));


  console.log(arr);
}

main();

//#2 length = 1 capacity = 3 addr =0
//#2-2 length=6 capacity=6 addr=3
//#3 Array { length: 3, capacity: 6, ptr: 3 }
//#4 We get NaN because the float64Array creates an array with a Float type. resize is to give us more space to add items.