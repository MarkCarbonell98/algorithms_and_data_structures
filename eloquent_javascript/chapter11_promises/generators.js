function * powers(n) {
    for(let current = n;;current *= n) 
        yield current
}

let counter = 0
for(const power of powers(2)) {
    if(counter>100) break
    console.log(power)
    counter++
}

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        const result = []
        let counter = promises.length
        for(let i = 0; i < promises.length; i++) {
            promises[i]
            .then(res => {
                result[i] = res;
                counter--;
                if(counter == 0) resolve(result)
            })
            .catch(reject) 
        }
        if(promises.length == 0) resolve(result)
    })
}


Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
  });
  Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
      console.log("We should not get here");
    })
    .catch(error => {
      if (error != "X") {
        console.log("Unexpected failure:", error);
      }
    });
  
