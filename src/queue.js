// const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.with = 0;
  }

  getUnderlyingList() {
    // console.log(this);
    // return this;
    // console.log(this.head);
    return this.head;
  }

  enqueue(value) {
    // console.log(this.with);
    if (this.with != 0) {
      let node = this.head
      for (let i = 0; i < this.with -1; i++) {
        node = node.next
      }
      node.next = new ListNode(value);
    } else {
        const nodeNew = new ListNode(value);
        this.head = nodeNew;

    }
    this.with = this.with + 1
    // console.log(this.with);
    // console.log(this);
      return this;
}

  dequeue() {
      let nodeDel = this.head.value
      let node = this.head.next
      this.head = node
      this.with = this.with - 1
      return nodeDel;
  }
}

module.exports = {
  Queue
};
