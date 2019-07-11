const console = require("../Data Structures/singlyLinkedList")

class Node {
    constructor(val= null, next = null, prev = null) {
        this.val = val
        this.next = next,
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = null
        this.head = null
    }

    push(value) {
        const node = new Node(value)
        if(!this.head)
        {
            this.head = this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++;
        return this
    }

    pop() {
        if(!this.head) return null
        const tail = this.tail
        if(this.length == 1) {
            this.tail = null
            this.head = null
        } else {
            this.tail = tail.prev
            this.tail.next = null
            tail.prev = null
        }
        this.length--;
        return tail
    }

    shift() {
        const head = this.head  
        if(!this.head) return null
        if(this.length == 1) {
            this.tail = null
            this.head = null
        } else {
            this.head = head.next
            this.head.prev = null
            head.next = null
        }
        this.length--;
        return head
    }

    unshift(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        const middle = Math.floor(this.length/2)
        let counter = 0, i = this.head
        if(index <= middle) {
            while(counter != index){
                i = i.next;
                counter++
            }
        } else {
            i = this.tail, counter = this.length -1;
            while(counter != index){
                i = i.prev;
                counter--;
            }
        }
        return i
    }

    set(index, value) {
        let node = this.get(index)
        if(!node) return false
        node.val = value
        return true
    }

    insert(index, value) {
        if(index == this.length -1) return this.push(value)
        if(index == 0) return this.unshift(value)
        let newNode = new Node(value)
        let prevNode = this.get(index-1), nextNode = prevNode.next
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode
        this.length++;
        return this
    }

    remove(index) {
        if (index == this.length -1) return this.pop() 
        if(index == 0) return this.shift()
        const node = this.get(index)
        if(!node) return null
        let nextNode = node.next, prevNode = node.prev
        prevNode.next = nextNode
        nextNode.prev = prevNode

        node.next = null
        node.prev = null
        this.length--;
        return node
    }

    reverse() {
        let oldHead = this.head, next, prev = null;
        this.head = this.tail
        this.tail = oldHead
        for(let i = 0; i < this.length; i++) {
            next = oldHead.next
            oldHead.next = prev
            prev = oldHead
            oldHead = next
        }
        return this
    }
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
console.print(doublyLinkedList)
doublyLinkedList.pop()
doublyLinkedList.pop()
doublyLinkedList.pop()
console.print(doublyLinkedList)
doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.shift()
doublyLinkedList.shift()
doublyLinkedList.shift()
console.print(doublyLinkedList)
doublyLinkedList.unshift(1)
doublyLinkedList.unshift(2)
doublyLinkedList.unshift(3)
console.print(doublyLinkedList)
console.log(doublyLinkedList.get(0))
console.log(doublyLinkedList.get(1))
console.log(doublyLinkedList.get(2))
console.print(doublyLinkedList)
doublyLinkedList.set(0, 10)
doublyLinkedList.set(1, 20)
doublyLinkedList.set(2, 30)
console.print(doublyLinkedList)
doublyLinkedList.insert(1, 40)
doublyLinkedList.set(2, 50)
doublyLinkedList.set(3, 60)
console.print(doublyLinkedList)
doublyLinkedList.remove(0)
doublyLinkedList.remove(1)
doublyLinkedList.remove(2)
console.print(doublyLinkedList)
doublyLinkedList.pop()
doublyLinkedList.pop()
doublyLinkedList.pop()
doublyLinkedList.pop()
doublyLinkedList.pop()
doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.push(4)
// console.print(doublyLinkedList)
console.print(doublyLinkedList)
doublyLinkedList.reverse()
console.print(doublyLinkedList)




