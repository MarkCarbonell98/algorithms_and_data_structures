const util = require("util");

class Node {
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    Dijkstra(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        let smallest;
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === end) {
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]) {
                        distances[nextNode.node]  = candidate;
                        previous[nextNode.node] = smallest;
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }

            }
        }
        return path.concat(smallest).reverse();
        
    }
}

const G = new WeightedGraph();

G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addVertex("D");
G.addVertex("E");
G.addVertex("F");

G.addEdge("A","B",11);
G.addEdge("A","C",5);
G.addEdge("B","D",19);
G.addEdge("C","E",1);
G.addEdge("D","E",7);
G.addEdge("D","F", 12);
G.addEdge("E","F", 3);

console.log(G.Dijkstra("A", "F"));

console.log(util.inspect(G, {showHidden:false, depth: null}));

