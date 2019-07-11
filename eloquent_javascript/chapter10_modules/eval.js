const x = 1;
function evalAndReturn(code) {
    eval(code);
    return x
}

console.log(evalAndReturn("var x = 2"))

console.log(x)

//using the Function constructor
/**
 * @param 0 = funciton argument
 * @param 1 = function body
 */

const plusOne = Function("n", "return n + 1;"); 
console.log(plusOne(5))

const ordinal = require("ordinal");
const {days, months} = require("date-names")

exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        switch(tag) {
            case "YYYY":
                return date.getMonth();
            case "M":
                return date.getMonth();
            case "MMMM":
                return months[date.getMonth()]
            case "D":
                return date.getDate();
            case "Do": 
                return ordinal(date.getDate())
            case "dddd":
                return days[date.getDay()]
            default:
                return undefined
        }
    })
}

