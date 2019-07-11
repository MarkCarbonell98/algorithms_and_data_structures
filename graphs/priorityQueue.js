module.exports = class PriorityQueue {
    constructor() {
        this.values = []
    }

    bubbleUp() {
        let childIndex = this.values.length -1;
        const child = this.values[childIndex]
        while(childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1)/2)
            const parent = this.values[parentIndex]
            if(child.priority > parent.priority) break;
            this.values[parentIndex] = child;
            this.values[childIndex] = parent
            childIndex = parentIndex;
        }
    }

    enqueue(val, priority) {
        this.values.push({val, priority})
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
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) swap = rightChildIndex
            }  
            
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}