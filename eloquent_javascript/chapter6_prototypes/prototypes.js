const {inspect} = require('util')


const protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} says ${line}`)
    },
    legs: 4
}

const killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "Killer Rabbit"
killerRabbit.speak("Skeee!")
console.log(killerRabbit.legs)

const ages = {
    A: 31, 
    B: 22,
    C: 62
}

console.log("A" in ages)
console.log("toString" in ages)
console.log("toLocaleString" in ages)
console.log(inspect(Object.prototype, {depth: null, colors: true}))

const ages2 = new Map()
ages2.set("Boris", 39)
ages2.set("Liang", 22)
ages2.set("Julia", 62)

console.log(ages2.get("Julia"))
console.log(ages2.has("Boris"))
console.log(ages2.has("toString"))

console.log({x: 1}.hasOwnProperty('x'))
console.log({x: 1}.hasOwnProperty('toString'))

// function Rabbit(type) {
//     const rabbit = Object.create(protoRabbit)
//     rabbit.type = type
//     return rabbit
// }

class Rabbit {
    constructor(type) {
        this.type = type
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`)
    }
}

const blackRabbit = new Rabbit('black')

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`
}
console.log(String(blackRabbit))

const sym = Symbol('marcos')
console.log(sym === Symbol('marcos'))

Rabbit.prototype[sym] = 55
console.log(blackRabbit[sym])

const toStringSymbol = Symbol("toString")
Array.prototype[toStringSymbol] = function() {
    return `${this.length}cm of blue yarn`
}

const stringObj = {
    [toStringSymbol]() {return 'a jute rope'}
}

console.log(stringObj[toStringSymbol]())

const okIterator = "OK"[Symbol.iterator]()
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())
