class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
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

    rotate(val) {
        let rotations = val % this.length + this.length;
        let total = rotations % val;
        console.log(rotations, total);
        if(val > 0) {
            for(let i = 0; i < rotations; i++) {
                this.unshift(this.pop());
            }
        }
    }
}
let list = new SinglyLinkedList();
for(let i = 0; i < 10; i++)
    list.push(i);

list.rotate(2);
console.log(list)
list.rotate(-1);
console.log(list)
list.rotate(4);
console.log(list)

