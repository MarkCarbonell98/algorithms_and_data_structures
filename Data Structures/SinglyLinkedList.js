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
            console.log(i.val, i.next);
        }
    }

    // pop() {
    //     if(!this.head) return undefined;
    //     let current = this.head;
    //     let newTail = current;
    //     while(current.next) {
    //         newTail = current;
    //         current = current.next;
    //     }
    //     this.tail = newTail;
    //     this.tail.next = null;
    //     this.length--;
    //     if(this.length === 0) {
    //         this.head = null;
    //         this.tail = null;
    //     }
    //     return current;
    // }
    pop() {
        let actualElement, lastElem;
        if(!this.head) return undefined;
        for(let i = this.head; i; i=i.next) {
            actualElement = i;
            lastElem = i.next;
        }
        this.tail = actualElement;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return lastElem;
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
        if(!this.head) return undefined;
        let counter = 0;
        for(let i = this.head;i; i=i.next) {
            if(counter === index) {
                return i;
            } else if(counter > index || index < 0) {
                return undefined;
            }
            counter++;
        }
    }
    set(index, newValue) {
        if(!this.head) return undefined;
        let counter = 0;
        for(let i = this.head; i; i=i.next) {
            if(counter === index) {
                i.val = newValue;
                return i;
            }
            counter++;
        }
    }

        insert(index, node) {
            if(!this.head) return undefined;
            let counter = 0, theElement;
            for(let i = this.head; i; i=i.next) {
                if(counter === index) {
                    theElement = i.next;
                    i.next = node;
                    node.next = theElement;
                    return list;
                }
                counter++;
            }
        }
}

let first = new Node("hey");
first.next = new Node("you");
first.next.next = new Node("look");
first.next.next.next = new Node("pretty! :P");

let list = new SinglyLinkedList();
list.push("yo");
list.push("soy");
list.push("increible")
console.log(list)
list.pop();
console.log(list);
list.shift()
console.log(list);
list.unshift('y amazing');
console.log(list);
console.log(list.get(1));
console.log(list.set(1, "YOLOOOOOOOO"))
console.log(list);
list.insert(first);
console.log(list);


// list.push("amazing");
// list.push("amazing");
// console.log(list);
// console.log(list.length)
// console.log(list.tail);
// console.log(list.head)
