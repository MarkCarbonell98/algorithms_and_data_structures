const WeightedGraph = require("./weightedGraph")
const roads = require("./roads")

module.exports = buildGraph = roads => {
    const graph = new WeightedGraph()
    let vertex;
    for(let road of roads) {
        vertex = road.split("-");
        vertex.forEach(road => graph.addVertex(road))
    }

    for(let road of roads) {
        const [vertexA, vertexB] = road.split("-")
        graph.addEdge(vertexA, vertexB, Math.random() * 100)
    }
    return graph;
}
