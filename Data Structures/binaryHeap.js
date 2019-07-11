

class maxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let i = this.values.length -1;
        let child = this.values[i];
        while(i > 0) {
            let parentI = Math.floor((i-1)/2);
            let parent = this.values[parentI];
            if(parent >= child) break;
            this.values[i] = parent;
            this.values[parentI] = child;
            i = parentI;
        } 
    }

    extractMax() {
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
                if(leftChild > element) { //if the left child is bigger than the parent, swap.
                    swap = leftChildIndex;
                }
            }

            if(rightChild < this.values.length-1) {
                rightChild = this.values[rightChildIndex]; //same as the last if statement.
                if( 
                    (swap === null && rightChild > element) || //both swap conditions may be true. the first one checks if swap is null and the right child is greater than the parent. (requires swap), or if the swap has been made and the right child is greater than the leftchild 
                    (swap !== null && rightChild > leftChild)
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

let heap = new maxBinaryHeap();
heap.insert(12);
heap.insert(4);
heap.insert(2);
heap.insert(199);
heap.insert(10);
heap.insert(3);
heap.insert(15);
heap.insert(55);

console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
