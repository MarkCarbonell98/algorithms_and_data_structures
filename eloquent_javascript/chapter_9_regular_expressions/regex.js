const re1 = new RegExp("abc")
const re2 = /abc/

const expr = /eighteen\+/

console.log(/abc/.test("abcde"))
console.log(/abc/.test("abXde"))

console.log(/[0123456789]/.test("asdfad 18823"))
console.log(/[0-9]/.test("asdfad 18823"))

// \d === /[0-9]/
/**
 * \d digits
 * \w words [a-z], [A-Z]
 * \s whitespace chars
 * \D everything not digit
 * \W not word char
 * \S non whitespace
 *  . everything except \n
 */ 

const dateTime = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/
console.log(dateTime.test("01-30-2009 14:20"))
console.log(dateTime.test("01-jan-2009 14:20"))

console.log(/[\d.]/.test("asdfadfaf"))

const notBinary = /[^01]/
console.log(/[^01]/.test((1234).toString(2)))
console.log(/[^01]/.test((1234).toString(8)))

//repeating patterns
console.log(/'\d+'/.test("'1234'")) //MATCHES 1 OR MORE TIMES
console.log(/'\d+'/.test("''"))
console.log(/'\d*'/.test("''")) //MATCHES 0 OR MORE TIMES
console.log(/'\d*'/.test("'123'"))

console.log(/neighbou?r/.test("neighbour")) //the character preceding the ? can may be omitted
console.log(/neighbou?r/.test("neighbor"))


//Ranges {}
const dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test("1-30-1222 8:45"))

const unlimitedDigits = /\d{5,}/
console.log(/\d{5,}/.test('1234123412341234'))

const cartoon = /boo+(hoo+)+/i
console.log(cartoon.test("Boohoooohoohooo"));

const match = /\d+/.exec("one two 100 1000 1000, 1234")
console.log(match)
console.log(match[0].index)
// → true

console.log("one two 100 1000 10000".match(/\d+/))

const quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hola senorito'"))

console.log(/bad(ly)?/.exec("bad"))
console.log(/(\d)+/.exec("123"))

//months start with 11
console.log(new Date(2009, 11, 9, 12, 59, 59, 999))
console.log(new Date(2013, 3, 20).getTime())
console.log(new Date(-1000)) //single argument: milisecond count

function getDate(string) {
    // _ is ignored
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string)
    // const [_, month, day, year] = result
    return new Date(year, month -1, day)
}

// caret inside [^] means the antipattern
// caret outside ^ means match the beginning of the string

console.log(getDate("1-30-2003"))

const wholeStringWithOneOrMoreDigits = /^\d+$/
const startsWithExclSign = /^!/
console.log(/^\d+$/.exec("1234"))
console.log(/^\d+$/.exec("12344 "))
console.log(/^!/.exec("!hellou"))
console.log(/^/.exec("!hellou"))
console.log(/cat/.test('concatenate'))
console.log(/\bcat\b/.test('cat'))

// | the pipe operator
const animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("32541 pig 1234 chickens"))
console.log(animalCount.test("32541 pigchickens 1234 pigchickens"))


const binaryOrHex = /\b([01]+b|[\da-f]+h|\d+)\b/

// using the g modifier at the end of the expression, you match the entire string, instead of just the first match

// The replace method
console.log("papa".replace(/p/g, "m"))

console.log("Borodubur".replace(/[ou]/, "a"))
console.log("Borodubur".replace(/[ou]/g, "a"))

console.log('liskov, Barbara\nMcCarthy, John\nWadler, Phillip'.replace(/(\w+), (\w+)/g, "$2 $1")) // up to $9, whole match with $&

const s = "the cia and fbi"
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()))

const stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) -1;
    if(amount == 1) {
        unit = unit.slice(0, unit.length-1);
    } else if(amount == 0) {
        amount = "no"
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne))

function stripComments(code) {
    return code.replace(/\/\/.*|\/\/*[^]*?\*\//g, "")
}

console.log(stripComments("1 + /* 2 */3"))
console.log(stripComments("x = 10;// ten broooo!"))
console.log(stripComments("1 /* a */ + /* b */ 1"))

// operators + * ? {} match as much as they can (greedy)
// operators +? *? ?? {}? are non-greedy

const name = "harry";
const text = "Harry is suspicious";
let regex = new RegExp("\\b("+name+")\\b","gi")
console.log(text.replace(regex, "_$1_"))

const name2 = "dea+hl[]rd";
const text2 = "This dea+hl[]rd guy is super annoying."
const escaped = name2.replace(/[\\[.+*?(){|^$]g/, "\\$&");
const expr2 = new RegExp("\\b"+escaped+"\\b","gi")
console.log(text2.replace(expr2, "_$&_"))


// the string search method

console.log("word".search(/\S/))
console.log("   ".search(/\S/))

const pattern = /y/g;
pattern.lastIndex = 3;
const match2 = pattern.exec("xyzzy");
console.log(match2.index)
console.log(pattern.lastIndex)


//after each call lastindex is updated

const global2 = /abc/g;
console.log(global2.exec("xyz abc")) //lastindex updated 
const sticky = /abc/y //sticky marker
console.log(sticky.exec("xyz abc")) // starts searching from lastindex, else null

const digit = /\d/g;
console.log(digit.exec("here it is: 1"))
console.log(digit.exec("and now:  1"))

console.log("Banana".match(/an/g))

//iteration over matches
let input2 = "A string with 3 numbers in it... 42 and 88.";
const number = /\b\d+\b/g;
let match3;
while(match3 = number.exec(input2)) {
    console.log(input2)
    console.log("Found", match3[0], "at", match3.index)
}

