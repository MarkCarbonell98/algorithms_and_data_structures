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
    
    push(val){
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node; 
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let head = this.head;
        this.head = head.next;
        this.length--;
        if(this.length===0) {
            this.tail = null;
        }
        return head;
    }
}

let ssl = new SinglyLinkedList();
ssl.push(15);
ssl.push(14);
ssl.push(13);
ssl.pop()
ssl.pop()
console.log(ssl);