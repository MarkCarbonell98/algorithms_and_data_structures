class Node {
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}

class maxBinaryHeap {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let i = this.values.length -1;
        let child = this.values[i];
        while(i > 0) {
            let parentI = Math.floor((i-1)/2);
            let parent = this.values[parentI];
            if(parent.priority <= child.priority) break;
            this.values[i] = parent;
            this.values[parentI] = child;
            i = parentI;
        } 
    }

    dequeue() {
        //swap the first value with the last one
        const first = this.values[0];
        const last = this.values.pop(); //pop from values, and return it at the end;
        this.values[0] = last;
        this.sinkDown();
        return first;
    }

    sinkDown() {
        let rootIndex = 0; //root index
        let element = this.values[0]; //roo tlement
        while(true) {
            let leftChildIndex = 2 * rootIndex + 1; //searching for child elements
            let rightChildIndex = 2 * rootIndex + 2; 
            let rightChild, leftChild, swap = null; //swap 
            if(leftChildIndex < this.values.length-1) { //if the left child index is smalles than the heaps length, then swap the values.
                leftChild = this.values[leftChildIndex]; //selecting the left child
                if(leftChild.priority < element.priority) { //if the left child is bigger than the parent, swap.
                    swap = leftChildIndex;
                }
            }

            if(rightChild < this.values.length-1) {
                rightChild = this.values[rightChildIndex]; //same as the last if statement.
                if( 
                    (swap === null && rightChild.priority < element.priority) || //both swap conditions may be true. the first one checks if swap is null and the right child is greater than the parent. (requires swap), or if the swap has been made and the right child is greater than the leftchild 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break; //if no swaps were made, then break (reached root)
            this.values[rootIndex] = this.values[swap]; //declare old root as the new root
            this.values[swap] = element; //declare the swapped element as the new parent
            rootIndex = swap; //declare the root index as the new elements index.
        }
    }
}
//heaps are always full on all levels (from left to right)
//bst dont, can look like a SLL;

let heap = new maxBinaryHeap();
heap.enqueue("common cold",1);
heap.enqueue("fever",2);
heap.enqueue("bike fall",3);
heap.enqueue("concussion",5);
heap.enqueue("exploded head",10);

// console.log(heap);
console.log(heap.dequeue());
// console.log(heap);
console.log(heap.dequeue());
// console.log(heap);
console.log(heap.dequeue());
// console.log(heap);
console.log(heap.dequeue());
// console.log(heap);
