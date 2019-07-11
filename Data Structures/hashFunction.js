// hash table, or hash maps
// function slowHash(key) {
//     for(let i = 0; i < 100; i++)
//     {
//         // console.log("everyday i'm hashing");
//     }
//     return key[0].charCodeAt(0);
// }

// console.log(slowHash("hello"))
// console.log(slowHash("servus"))
// console.log(slowHash("sevilla"))

// console.log("a".charCodeAt(0) - 96)
// console.log("a".charCodeAt(1) - 96)
// console.log("abc".charCodeAt(2) - 96) //alphabetic position
// console.log("abc".charCodeAt(-1) -96)

{
    // function hash(key, length) {
    //     let total = 0; 
    //     for(let char of key) {
    //         let value = char.charCodeAt(0) - 96; //alphabetic index
    //         total = (total + value) % length;
    //     }
    //     return total;
    // }
    
    
    
    // console.log(hash("pink",10));
    // console.log(hash("orange",10));
    // console.log(hash("red",10));
    // console.log(hash("red",10));
}

function hash(key, size) {
    let total = 0; 
    let prime = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % size;
    }
    return total;
}

//separate chaining
//linear probing

console.log(hash("pink",10));
console.log(hash("orange",10));
console.log(hash("red",10));
console.log(hash("red",10));