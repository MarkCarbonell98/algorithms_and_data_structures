
class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    bubbleUp() {
        let childIndex = this.values.length -1;
        const child = this.values[childIndex]
        while(childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1)/2)
            const parent = this.values[parentIndex]
            if(child <= parent) break;
            this.values[parentIndex] = child;
            this.values[childIndex] = parent
            childIndex = parentIndex;
        }
    }

    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }

    dequeue() {
        if(this.values.length < 2) {
            return this.values.pop()
        }
        const greatestNode = this.values[0]
        const lastNode = this.values.pop()
        this.values[0] = lastNode;
        this.sinkdown();
        return greatestNode
    }

    sinkdown() {
        const length = this.values.length;
        let index = 0;
        const element = this.values[0]
        while(true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 1
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if(leftChild > element) swap = leftChildIndex
            }

            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) swap = rightChildIndex
            }   
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

const heap = new MaxBinaryHeap()
heap.insert(53)
heap.insert(4010)
heap.insert(1)
heap.insert(2)
heap.insert(23)
heap.insert(23)
heap.insert(24)
heap.insert(15)
heap.dequeue()
heap.dequeue()
heap.dequeue()
heap.dequeue()
heap.dequeue()
heap.dequeue()
console.log(heap.dequeue())
console.log(heap.dequeue())
console.log(heap.dequeue())
console.log(heap.values)




class PriorityQueue {
    constructor() {
        this.values = []
    }

    bubbleUp() {
        let childIndex = this.values.length -1;
        const child = this.values[childIndex]
        while(childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1)/2)
            const parent = this.values[parentIndex]
            if(child.priority <= parent.priority) break;
            this.values[parentIndex] = child;
            this.values[childIndex] = parent
            childIndex = parentIndex;
        }
    }

    enqueue(val, priority) {
        this.values.push({value: val, priority})
        this.bubbleUp()
    }

    dequeue() {
        if(this.values.length < 2) {
            return this.values.pop()
        }
        const greatestNode = this.values[0]
        const lastNode = this.values.pop()
        this.values[0] = lastNode;
        this.sinkdown();
        return greatestNode
    }

    sinkdown() {
        const length = this.values.length;
        let index = 0;
        const element = this.values[0]
        while(true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 1
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if(leftChild.priority > element.priority) swap = leftChildIndex
            }

            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) swap = rightChildIndex
            }  
            
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}


const priorityQueue = new PriorityQueue()
priorityQueue.enqueue("node1",53)
priorityQueue.enqueue("node2",53)
priorityQueue.enqueue("node3",4010)
priorityQueue.enqueue("node4",1)
priorityQueue.enqueue("node5",2)
priorityQueue.enqueue("node6",23)
priorityQueue.enqueue("node7",23)
priorityQueue.enqueue("node8",24)
priorityQueue.enqueue("node9",15)
console.log(priorityQueue.values)
priorityQueue.dequeue()
priorityQueue.dequeue()
priorityQueue.dequeue()
priorityQueue.dequeue()
priorityQueue.dequeue()
priorityQueue.dequeue()
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.values)
console.log(priorityQueue.values)