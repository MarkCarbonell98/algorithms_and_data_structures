class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(){
        var newNode = new Node(val);
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
    pop(){
        if(!this.head) return undefined;
        let current = this.head, newTail = current;
        while(current.next) {
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

    get(index) {
        if(!this.head || index < 0 || index > this.length) return undefined;
        let counter = 0;
        for(let i = this.head;i; i=i.next) {
            if(counter === index) return i;
            counter++;
        }
    }
}