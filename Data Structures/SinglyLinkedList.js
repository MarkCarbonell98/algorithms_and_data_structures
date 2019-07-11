class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }

    printList() {
        console.log("LENGTH = %d", this.length);
        for(let i = this.head; i; i=i.next) {
            console.log(i.val);
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift() {
        if(!this.head) return undefined;
        let theHead = this.head;
        this.head = theHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return theHead;
    }

    unshift(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(!this.head || index < 0 || index > this.length) return undefined;
        let counter = 0;
        for(let i = this.head;i; i=i.next) {
            if(counter === index) return i;
            counter++;
        }
    }
    set(index, newValue) {
        let theNode = this.get(index);
        if(!theNode) return false;
        theNode.val = newValue;
        return true;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index-1);
        let temp = prev.next;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length) return !!this.pop();
        if(index === 0) return !!this.shift();
        let lastNode = this.get(index-1);
        let removedNode = this.get(index);
        lastNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head, next, prev = null;
        this.head = this.tail;
        this.tail = node;
        for(let i = 0; i< this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
let testNode = new Node("Hi, I am the new node!");
list.push("Servus");
list.push("Kollegen");
list.push("Guten");
list.push("Morgen!");
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
list.push("Servus");
list.push("Kollegen");
list.push("Guten");
list.push("Morgen!");

console.log(list.get(0));
console.log(list.get(3));
list.insert(0, "hey bro");
list.printList()
list.insert(0, "hey bro");
list.printList()
list.remove(0);
list.remove(0);
list.printList();
list.remove(2);
list.printList();
list.remove(1);
list.printList()
list.push("new node 1");
list.push("new node 2");
list.push("new node 3");
list.push("new node 4");
list.printList();
list.reverse();
list.printList();
// list.reverseEff();
// list.reverseEff();

list.printList();
console.log(list.get(6));
list.printList()
