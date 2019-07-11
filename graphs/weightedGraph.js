const PriorityQueue = require("./priorityQueue")

module.exports = class WeightedGraph {
    constructor() {
        this.adjacencyList = []
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({node: vertex2, weight: weight})
            this.adjacencyList[vertex2].push({node: vertex1, weight: weight})
        }
    }

    dijkstra(startingVertex, endingVertex) {
        const distances = {}, priorityQueue = new PriorityQueue(), previous = {}, path = []
        let shortestDistanceNode;
        for(const item in this.adjacencyList) {
            if(item !== startingVertex) {
                distances[item] = Infinity
            } else {
                distances[item] = 0
            }
            priorityQueue.enqueue(item, distances[item])
            previous[item] = null
        }
        while(priorityQueue.values.length) {
            shortestDistanceNode = priorityQueue.dequeue().val
            if(shortestDistanceNode === endingVertex) {
                while(previous[shortestDistanceNode]) {
                    path.unshift(shortestDistanceNode)
                    shortestDistanceNode = previous[shortestDistanceNode]
                }
                path.unshift(shortestDistanceNode)
                break;
            }
            for(const {node, weight} of this.adjacencyList[shortestDistanceNode]) {
                let distance = weight + distances[shortestDistanceNode];
                if(distances[node] > distance){
                    distances[node] = distance
                    previous[node] = shortestDistanceNode
                    priorityQueue.enqueue(node, distance)
                }
            }
        }
        return path;
    }
}

// const weightedGraph = new WeightedGraph()
// weightedGraph.addVertex("Mannheim")
// weightedGraph.addVertex("Eberbach")
// weightedGraph.addVertex("Schwetzingen")
// weightedGraph.addVertex("Heidelberg")
// weightedGraph.addVertex("Weinheim")
// weightedGraph.addVertex("Frankfurt")
// weightedGraph.addEdge("Mannheim", "Heidelberg", 26)
// weightedGraph.addEdge("Mannheim", "Schwetzingen", 21)
// weightedGraph.addEdge("Heidelberg", "Schwetzingen", 12)
// weightedGraph.addEdge("Weinheim", "Heidelberg", 10)
// weightedGraph.addEdge("Frankfurt", "Heidelberg", 120)
// weightedGraph.addEdge("Frankfurt", "Mannheim", 98)
// weightedGraph.addEdge("Weinheim", "Mannheim", 19)
// weightedGraph.addEdge("Eberbach", "Heidelberg", 30)
// weightedGraph.addEdge("Eberbach", "Mannheim", 56)
// weightedGraph.addEdge("Eberbach", "Weinheim", 48)

// console.print(weightedGraph.dijkstra("Eberbach", "Frankfurt"))

// const coltsGraph = new WeightedGraph()
// coltsGraph.addVertex("A")
// coltsGraph.addVertex("B")
// coltsGraph.addVertex("C")
// coltsGraph.addVertex("D")
// coltsGraph.addVertex("E")
// coltsGraph.addVertex("F")

// coltsGraph.addEdge("A", "B", 4)
// coltsGraph.addEdge("A", "C", 2)
// coltsGraph.addEdge("B", "E", 3)
// coltsGraph.addEdge("C", "D", 2)
// coltsGraph.addEdge("C", "F", 4)
// coltsGraph.addEdge("D", "E", 3)
// coltsGraph.addEdge("D", "F", 1)
// coltsGraph.addEdge("E", "F", 1)
// console.log(coltsGraph.dijkstra("A", "E"))

// const cityGraph = new WeightedGraph();