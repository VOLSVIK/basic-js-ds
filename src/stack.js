// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor() {
    this.arr1 = [];
}
  push(element) {
    this.arr1 = this.arr1.concat(element);
  }

  pop() {
    return this.arr1.splice(this.arr1.length - 1, 1)[0]
  }

  peek() {
    return this.arr1[this.arr1.length - 1]
  }
}

module.exports = {
  Stack
};
