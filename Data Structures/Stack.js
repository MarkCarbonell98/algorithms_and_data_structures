class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    

    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        let deletedNode = this.first;
        if(!this.first) return null;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;

        }
        this.length--;
        return deletedNode.val;
    }

    printStack() {
        let counter = 0;
        for(let i = this.first; i; i = i.next) {
            console.log("position = %d, i.val = " + i.val, counter);
            counter++;
        }
    }
}
//LIFO principle last in, first out
let stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
stack.push("fourth");
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.push("first");
stack.printStack();

