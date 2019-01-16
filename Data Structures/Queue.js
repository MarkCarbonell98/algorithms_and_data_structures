//FIFO data structure First In, First Out

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        let holder = this.first;
        if(!this.first) return null;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return holder.val;
    }

    printQueue() {
        let counter = 0;
        for(let i = this.first; i; i = i.next) {
            console.log("i = %i, i.val = " + i.val, counter)
            counter++;
        }
    }
}

let queue = new Queue();
console.log(queue.enqueue("first"));
console.log(queue.enqueue("second"));
console.log(queue.enqueue("third"));
console.log(queue.enqueue("fourth"));
queue.printQueue()
console.log(queue.dequeue());
queue.printQueue()
console.log(queue.dequeue());
queue.printQueue()
console.log(queue.dequeue());
queue.printQueue()
console.log(queue.enqueue("last"));
queue.printQueue()
