const formatDate = require("./eval")
console.log(formatDate.constuctor)

console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

require.cache = Object.create(null)

function require(name) {
    if(!(name in require.cache)) {
        const code = fs.readfile(name) || "var x = 2";
        const module = {exports: {}}
        require.cache[name] = module
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module)
    }
    return require.cache[name].exports;
}

const {parse} = require("ini")
console.log(parse("x = 10\ny = 20"))
