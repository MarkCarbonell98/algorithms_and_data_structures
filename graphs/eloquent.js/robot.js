const roads = require("./roads")
const buildGraph = require("./buildGraph")
const print = require("./print")
const WeightedGraph = require("./weightedGraph")

const city = buildGraph(roads)

const move = (currentPosition, nextPlace, city) => {
    return city.dijkstra(currentPosition, nextPlace)
}

print(move("Marketplace", "Shop", city))

const packagesToDeliver = ["Marketplace", "Post Office", "Grete's House", "Farm", "Ernie's House", "Post Office", "Town Hall"]
const deliverPackages = (packages, city) => {
    for(let i = 1; i < packages.length; i++) {
        console.log(packages[i-1], packages[i])
        print(move(packages[i-1], packages[i], city))
    }
}

deliverPackages(packagesToDeliver, city);

const newGraph = new WeightedGraph()
newGraph.addVertex("A")
newGraph.addVertex("B")
newGraph.addEdge("A","B", 50)
print(newGraph.dijkstra("B", "A"))
