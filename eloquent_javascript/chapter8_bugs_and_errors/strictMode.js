
console.log("please write to the command line")

// console.log(input)




"use strict";

// strict mode prevents silent global bindings to be created (ex. not declaring a variable with let)
function checkStrictMode() {
    // 'use strict';
    for(counter = 0; counter < 10; counter++) {
        console.log("Servus \t")
    }
}

// checkStrictMode()

// strict mode sets the value of "this" to undefined, in all non-member-functions.

 //use strict prevents this from happening
function Person(name) {this.name = name;}
const ferdinand = new Person("Ferdinand") //not calling new, prevents the constructors from creating a new object
// console.log(name) // The function returns undefined, so the interpreter created a global binding name


// function Person2(name) {this.name = name}
// const fer = Person2("Ferdinand")

function numberToString(n, base = 10) {
    let result = "", sign = ""
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result
        n = Math.floor(n / base)
    } while (n > 0)
    return sign + result;
}

console.log(numberToString(1323453245, 10));

// const input = prompt("write your name bro")
// console.log(input)