// const time = require("time")

const makeRangeIterator = (start = 0, end = Infinity, step = 1)  => {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next() {
            let result
            if (nextIndex < end) {
                result = {value: nextIndex, done: false}
                nextIndex += step
                iterationCount++;
                return result
            }  
            return {value: iterationCount, done: true}
        }
    }
    return rangeIterator
}


let iterator = makeRangeIterator(1,10,2)
let result = iterator.next()
while(!result.done) {
    console.log(result.value)
    result = iterator.next()
}

console.log("Iterated over ...", result.value, " many items")

function * makeRangeIterator2(start = 0, end = 100, step = 1) {
    for(let i = start; i < end; i ++) {
        yield i
    }
}

const iterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2
        yield 3
    }
}

for (let value of iterable) console.log(value)

console.log([...iterable])

function * gen() {
    yield * ['a', 'b', 'c']
}

console.log(gen().next())

let [a,b,c] = new Set(['a', 'b', 'c'])
console.log(a)

// fib as iterator

function * fibonacci() {
    let a = 0,b = 1
    while(true) {
        let current = a
        a = b
        b = current + a
        let reset = yield current
        if (reset) {
            a = 0
            b = 1
        }
    }
}

const fib = fibonacci()

for (let i = 0; i < 1000; i++) {
    console.log(fib.next().value)
}