const util = require("util")

module.exports = function print(...args) {
    for(const arg of args) {
        console.log(util.inspect(arg, {depth: null, colors: true}))
    }
}

