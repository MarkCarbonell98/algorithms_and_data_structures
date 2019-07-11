//directed and undirected graphs


//undirected graphs offer bilateral edges

//directed graphs offer unilateral edges,
//usually represented with arrows

//examples facebook vs instagram

//weighed graphs : each edge has a value associated with it

//unweighted graphs: no value associations on the edges

//adjacency matrix

//nested arrays in rows and columns

//

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(key) {
        if(!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
        }

        if(this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( 
            v => v !== v2
        );
        
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }

    removeVertex(v) {
        while(this.adjacencyList[v].length) {
            const actual = this.adjacencyList[v].pop();
            this.removeEdge(v, actual);
        }
        delete this.adjacencyList[v];
    }

    depthFirstRecursive(start) {
        const list = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function helper(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            list.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return helper(neighbor);
                }
            });
        })(start)

        return list;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }

    breathFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let actual;
        
        while(queue.length) {
            actual = queue.shift();
            result.push(actual);

            this.adjacencyList[actual].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

const G = new Graph();
G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addVertex("D");
G.addVertex("E");
G.addVertex("F");

G.addEdge("A","B");
G.addEdge("A","C");
G.addEdge("B","D");
G.addEdge("C","E");
G.addEdge("D","E");
G.addEdge("D","F");
G.addEdge("E","F");

console.log(G.depthFirstRecursive("A"));
console.log(G.depthFirstIterative("A"));
console.log(G.breathFirstSearch("A"));
console.log(G);