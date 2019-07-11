
// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Document</title>
// </head>
// <body>
  
// <script> -->
  
  const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];
  
  function buildGraphs(edges) {
    const graph = Object.create(null)
    function addEdge(from, to) {
      if(graph[from] == null){
        graph[from] = [to]
      } else {
        graph[from].push(to)
      }
    }
    for(const [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to)
      addEdge(to, from)
    }
    return graph
  }
  
  const roadGraph = buildGraphs(roads)
  
  class VillageState {
    constructor(place, parcels) {
      this.place = place, 
      this.parcels = parcels
    }
    
    move(destination) {
      if(!roadGraph[this.place].includes(destination)) return this
      const parcels = this.parcels.map(parcel => {
        if(parcel.place != this.place) return parcel
        return {place: destination, address: parcel.address}
      }).filter(parcel => parcel.place != parcel.address)
      return new VillageState(destination, parcels)
    }
  }
  
  const first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}])
  const next = first.move("Alice's House")
  
  console.log(next.place)
  console.log(next.parcels)
  console.log(first.place)
  console.log(first)
  console.log(next)
  
  // Object.freeze() method
  
  const freezedObject = Object.freeze({value: 5})
  freezedObject.value = 10
  freezedObject.someProperty = 10
  
  console.log(freezedObject)
  
  function runRobot(state, fnRobot, memory) {
    for(let turn = 0;; turn++) {
      if(state.parcels.length === 0) {
        console.log(`Done in ${turn} turns`)
        break
      }
      const action = fnRobot(state, memory)
      state = state.move(action.direction)
      memory = action.memory
      console.log(`Moved into ${action.direction}`)
    }
  }
  
  // The random robot (inefficient)
  function randomPick(array) {
    const choice = Math.floor(Math.random() * array.length);
    return array[choice]
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])}
  }
  
  VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for(let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph)), place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while(place == address)
      parcels.push({place, address})
    }
    return new VillageState("Post Office", parcels)
  }
  
  runRobot(VillageState.random(), randomRobot)
  
  const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];
  
  function routeRobot(state, memory) {
    if(memory.length == 0) memory = mailRoute
    return {direction: memory[0], memory: memory.slice(1)}
  }
  
  runRobot(VillageState.random(), routeRobot, [])

  function findRoute(graph, from, to) {
    const work = [{at: from, route: []}]
    for(let i = 0; i < work.length; i++) {
      const {at, route} = work[i]
      for(let place of graph[at]) {
        if(place == to) return route.concat(place)
        if(!work.some(w => w.at == place)) {
          work.push({at:place, route: route.concat(place)})
        }
      }
    }
  }

  function goalOrientedRobot({place, parcels}, route) {
    if(route.length == 0) {
      const parcel = parcel[0]
      if(parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place)
      } else{
        route = findRoute(roadGraph, place, parcel.address)
      }
    }
    return {direction: route[0], memory: route.slice(1)}
  }

  function countSteps(state, robot, memory) {
    for (let steps = 0;; steps++) {
      if (state.parcels.length == 0) return steps;
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  
  function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
      let state = VillageState.random();
      total1 += countSteps(state, robot1, memory1);
      total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100}`)
  }
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);
  //exercise 1

  function lazyRobot({place, parcels}, route) {
    if (route.length == 0) {
      // Describe a route for every parcel
      let routes = parcels.map(parcel => {
        if (parcel.place != place) {
          return {route: findRoute(roadGraph, place, parcel.place),
                  pickUp: true};
        } else {
          return {route: findRoute(roadGraph, place, parcel.address),
                  pickUp: false};
        }
      });
  
      // This determines the precedence a route gets when choosing.
      // Route length counts negatively, routes that pick up a package
      // get a small bonus.
      function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0) - route.length;
      }
      route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }
  
    return {direction: route[0], memory: route.slice(1)};
  }
  
  runRobotAnimation(VillageState.random(), lazyRobot, []);
//   <!-- </script>
  
// </body>
// </html> -->
  