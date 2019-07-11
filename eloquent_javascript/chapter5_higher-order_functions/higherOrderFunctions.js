let total = 0, count = 1
while(count <= 10) {
    total += count;
    count += 1
}
console.log(total)

function repeat(n, action) {
    for(let i = 0; i <n; i++)
    {
        action(i)
    }
}

const labels = []
repeat(5, i => labels.push(i))
console.log(labels)

function greaterThan(n) {
    return m => m > n;
}

const greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))

function noisy(f) {
    return (...args) => {
        console.log("calling with", args)
        const result = f(...args)
        console.log('called with ', args, "returned", result)
        return result
    }
}

function unless(cond, next) {
    if(!cond) next()
}


noisy(Math.min)(3,2,1)
console.log(repeat(3, n => {unless(n%2 === 1, () => {console.log(n, "is even")})}))

function filter(array, fn) {
    let passed = []
    for(let el of array) {
        if(fn(el)) {
            passed.push(el)
        }
    }
    return passed
}

function dominantDirection(text) {
    let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}