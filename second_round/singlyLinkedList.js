const util = require("util")


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if(!this.head) {
            this.tail = node;
            this.head = this.tail;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let deletedNode = this.tail, i = this.head;

        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        } else if(this.length > 1) {
            while(i.next.next) {
                i = i.next;
            }
            i.next = null;
            this.tail = i;
        }
        this.length--;
        return deletedNode;
    }

    shift() {
        if(!this.head) return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 1) {
            this.tail = null;
        }
        return oldHead
    }

    unshift(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index >= this.length || index < 0) return undefined
        let counter = 0, i = this.head;
        while(counter !== index) {
            i = i.next;
            counter++;
        } 
        return i.value;
    }

    set(index, value) {
        if(index >= this.length || index < 0) return undefined;
        let counter = 0, i = this.head;
        while(counter !== index) {
            i = i.next;
            counter++;
        }
        i.value = value;
        return this;
    }

    insert(index, value) {
        if(index >= this.length || index < 0) return undefined;
        if(index === 0) return this.unshift(value);
        if(index === this.length -1) return this.push(value);
        const newNode = new Node(value);
        let i = this.head, counter = 0;
        while(counter !== index -1) {
            i = i.next;
            counter++;
        }
        newNode.next = i.next;
        i.next = newNode
        
        this.length++;
        return this;
    }

    remove(index) {
        if(index >= this.length || index < 0) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        let removedNode, counter = 0, i = this.head;
        while(index - 1 !== counter) {
            i = i.next;
            counter++;
        }
        removedNode = i.next;
        i.next = removedNode.next;
        this.length--;
        return this;
    }

    reverse() {
        let oldHead = this.head
        this.head = this.tail
        this.tail = oldHead
        let next, prev = null
        for(let i = 0; i < this.length; i++){
            next = oldHead.next
            oldHead.next = prev
            prev = oldHead
            oldHead = next
        }
    }
}

console.print = function(...args) {
    for(let arg of args) {
        console.log(util.inspect(arg, false, null, true));
    }
}

const singlyLinkedList = new SinglyLinkedList() 
// singlyLinkedList.push("new value");
// singlyLinkedList.push("another value")
// singlyLinkedList.push("another value new")
// singlyLinkedList.pop()
// singlyLinkedList.pop()
// singlyLinkedList.pop()
singlyLinkedList.push(1)
singlyLinkedList.push(2)
singlyLinkedList.push(3)
singlyLinkedList.push(4)
// console.log(singlyLinkedList.get(0));
// console.log(singlyLinkedList.get(1));
// console.log(singlyLinkedList.get(2));
// console.log(singlyLinkedList.get(3));
// singlyLinkedList.set(0, "asdfasdf");
// singlyLinkedList.set(1, "asdfasdf1234");
// singlyLinkedList.set(2, "!@#$$#%@^");
// singlyLinkedList.insert(0,"hallo");
// singlyLinkedList.insert(1,"wie gehts");
// singlyLinkedList.insert(2,"dir heute");
// singlyLinkedList.insert(3,"bro");
// singlyLinkedList.insert(6,"etwas am ende");
// console.print(singlyLinkedList)
// singlyLinkedList.remove(1);
// console.print(singlyLinkedList)
// singlyLinkedList.remove(5);
console.print(singlyLinkedList)
singlyLinkedList.reverse();
console.print(singlyLinkedList)

module.exports = console