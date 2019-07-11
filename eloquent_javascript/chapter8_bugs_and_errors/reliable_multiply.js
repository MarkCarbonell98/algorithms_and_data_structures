// function askOnce(question){
//     var stdin = process.stdin, stdout = process.stdout;
//     stdin.resume();
//     stdout.write(question + ": ");
//     return new Promise(res => {
//         stdin.once('data', function(data) {
//         res(data.toString().trim());
//         });
//     });
// }

// askOnce("Whats your name?")
function askOnce(question){
    var stdin = process.stdin, stdout = process.stdout;

    stdin.resume();
    stdout.write(question + ": ");

    return new Promise(res => {
        stdin.once('data', function(data) {
        res(data.toString().trim());
    });
});
}


function ask(question, format){
    return askOnce(question).then(answer =>  {
        if(!answer.test(format))
            return ask(question, format);
        return answer;
    });
}

class MultiplicationUnitFailure extends Error {}
function multiply(a,b) {
    if(Math.random() < .2) return a *b;
    throw new MultiplicationUnitFailure("Klunk");
}

function reliableMult(a,b) {
    try {
        return multiply(a,b)
    } catch(e) {
        return reliableMult(a,b)
    }
}

function reliableMultiply(a, b) {
    for (;;) {
      try {
        return primitiveMultiply(a, b);
      } catch (e) {
        if (!(e instanceof MultiplicatorUnitFailure))
          throw e;
      }
    }
  }

console.log(reliableMult(8,8))

const box = {
    locked: true,
    unlock() {this.locked = false},
    lock() {this.locked = true},
    _content: [],
    get content() {
        if(this.locked) throw new Error("Locked!");
        return this._content
    }
}

// function withBoxUnlocked(func) {
//     try {
//         box.unlock()
//         func()
//         box.lock()
//     } catch(e) {
//         box.lock()
//     }
// }

function withBoxUnlocked(func) {
    const locked = box.locked;
    if(!locked) return func()
    box.unlock()
    try {
        return func()
    } finally {
        box.lock()
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece")
})

try {
    withBoxUnlocked(function() {
        throw new Error("Abort")
    })
} catch(e) {
    console.log("Error raised: " + e)
}

console.log(box.locked);


