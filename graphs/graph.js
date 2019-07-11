


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(key) {
        if(!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }
    
    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
        }
    }

    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            for(const item of this.adjacencyList[vertex]) {
                this.removeEdge(item, vertex)
            }
            delete this.adjacencyList[vertex]
        }
    }

    depthFirstSearch(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            // adjacencyList[vertex].forEach(v => console.log("from foreach",v));
            // for(const v of adjacencyList[vertex]) console.log("From loop",v)
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) return dfs(neighbor)
            })
        })(start);
        return result
    }

    depthFirstSearchIterative(vertex) {
        const stack = [vertex], visited = {}, result = []
        while(stack.length) {
            const node = stack.pop()
            if(!visited[node]) {
                visited[node] = true
                result.push(node)
                this.adjacencyList[node].forEach(neighbor => stack.push(neighbor))
            }
        }
        return result
    }

    breathFirstSearch(vertex) {
        const queue = [vertex], result = [], visited = {}
        visited[vertex] = true
        while(queue.length) {
            const visitedNode = queue.shift()
            result.push(visitedNode)
            this.adjacencyList[visitedNode].slice().reverse().forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result

    }

}

const graph = new Graph()
const vertexs = ["A", "B", "C", "D", "E", "F"]
vertexs.forEach(v => graph.addVertex(v))
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log(graph.depthFirstSearch('A'))
console.log(graph.depthFirstSearchIterative('A'))
console.log(graph.breathFirstSearch('A'))