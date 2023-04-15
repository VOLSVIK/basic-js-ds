// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
  }
}

class BinarySearchTree {
  constructor() {
      this.arr1 = [];
  }

  add(number) {
    const newNode = new Node(number);
    this.arr1.push(newNode)
  }

  root() {
    if (this.arr1.length == 0) {
      return null
    } else {
      return this.arr1[0]
    }
  }

  find(number) {
    let rez = 0
    for (let i = 0; i < this.arr1.length; i++) {
      if (this.arr1[i].data == number) {
        rez = this.arr1[i]
        i = this.arr1.length
      } else {
        rez = null
      }
      }
      return rez
    }

    has(number) {
      let rez = 0
      for (let i = 0; i < this.arr1.length; i++) {
        if (this.arr1[i].data == number) {
          rez = true
          i = this.arr1.length
        } else {
          rez = false
        }
        }
        return rez
      }
      
    remove(number) {
      let rez = 0
      for (let i = 0; i < this.arr1.length; i++) {
        if (this.arr1[i].data == number) {
          rez = i
          i = this.arr1.length
        }
        }
        this.arr1.splice(rez, 1);
      }

      max() {
        let rez = this.arr1[0].data
        for (let i = 0; i < this.arr1.length; i++) {
          if (this.arr1[i].data > rez) {
            rez = this.arr1[i].data
        }
        }
        return rez
      }

      min() {
        let rez = this.arr1[0].data
        for (let i = 0; i < this.arr1.length; i++) {
          if (this.arr1[i].data < rez) {
            rez = this.arr1[i].data
          }
          }
          return rez
        }
}

module.exports = {
  BinarySearchTree
};