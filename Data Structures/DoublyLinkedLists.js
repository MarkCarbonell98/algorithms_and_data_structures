class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let returnedElement = this.tail;
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return returnedElement;
    }

    shift() {
        let oldHead = this.head;
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index < this.length/2) {
            let counter  = 0;
            for(let i = this.head; counter <= index; i=i.next) {
                if(counter === index) return i;
                counter++;
            }
        } else {
            let counter = this.length-1;
            for(let i = this.tail; counter >= index; i = i.prev) {
                if(counter === index) return i;
                counter--;
            }
        }
    }

    set(index,val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        let newNode = new Node(val);
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length-1) return !!this.push(val);
        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length-1) return !!this.pop();
        let prevNode = this.get(index-1);
        let target = prevNode.next;
        
        let next = target.next;
        prevNode.next = next;
        next.prev = prevNode;
        target.next = null;
        target.prev = null;
        this.length--;
        return target;
    }

    printList() {
        let counter = 0;
        for(let i = this.head; i; i=i.next) {
            console.log("position : %d value = " + i.val, counter);
            counter++;
        }
        console.log("\n")
    }


}

let list = new DoublyLinkedList();
list.push("hellou");
list.push("hellou222");
list.push("hellou333");
list.printList();
list.pop()
list.pop()
list.printList();
list.push("hellou");
list.push("hellou222");
list.push("hellou333");
list.printList();
list.shift()
list.shift()
list.printList();
list.unshift("first added node");
list.unshift("another added node");
list.shift()
list.shift()
list.shift()
list.shift()
list.push("firstNOdeeeeeeeee1");
list.push("firstNOdeeeeeeeee2");
list.push("firstNOdeeeeeeeee3");
list.push("firstNOdeeeeeeeee4");
list.push("firstNOdeeeeeeeee5");
list.push("firstNOdeeeeeeeee6");
list.push("firstNOdeeeeeeeee7");

list.printList()
// list.pop()
// console.log(list.get(0).val);
// console.log(list.get(2).val);
// console.log(list.get(3).val);

// console.log(list.get(6).val);
// console.log(list.get(-1));
// console.log(list.get(4));
// console.log(list.set(4, "SET VAlUe"))
// console.log(list.set(4, "SET VAlUe"))
// console.log(list.set(4, "SET VAlUe"))
// console.log(list.set(0, "SET VAlUe"))
// console.log(list.set(6, "SET VAlUe"))
list.printList();

list.insert(2, "Hellou inserted value1")
list.insert(7, "Hellou inserted value1")
list.insert(3, "Hellou inserted value2")
list.insert(0, "Hellou inserted start")
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()

list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.printList();

list.remove(2);
list.printList();
